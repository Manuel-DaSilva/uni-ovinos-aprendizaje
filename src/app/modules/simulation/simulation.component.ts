import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SimulationInput } from './models/simulation-input.model';
import { SimulationStore } from './state/simulation.store';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  providers: [SimulationStore],
})
export class SimulationComponent implements OnInit, OnDestroy {
  simulationResult$ = this.simulationStore.simulationResult$;
  inputForm: FormGroup;
  subs: Subscription = Subscription.EMPTY;
  constructor(private simulationStore: SimulationStore) {
    this.inputForm = new FormGroup({
      cM: new FormControl(0, [Validators.required, Validators.min(0)]),
      cF: new FormControl(0, [Validators.required, Validators.min(0)]),
      bM: new FormControl(0, [Validators.required, Validators.min(0)]),
      bF: new FormControl(0, [Validators.required, Validators.min(0)]),
      o: new FormControl(0, [Validators.required, Validators.min(0)]),
      p: new FormControl(0, [Validators.required, Validators.min(0)]),
      rmh: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.max(25),
      ]),
      ind: new FormControl(1.2, [Validators.required, Validators.min(0)]),
      mc: new FormControl(10, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      ma: new FormControl(4, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      e: new FormControl(10, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      r: new FormControl(50, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
    });
  }
  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  info = [
    {
      severity: 'info',

      detail: `Dentro de esta sección podras realizar una simulación del movimiento de rebaño
    en ovinos, con un conjunto de valores iniciales e indices parametrizables,
    podras conocer a lo largo de un periodo de 10 años como se comporta el
    crecimiento de este rebaño.`,
    },
    {
      severity: 'info',

      detail: `  Para iniciar una simulación solo necesitas establecer la cantidad de ovejas y
      padrotes dentro del rebaño, el resto de valores tienen los indices generales,
      modificalos para ver el comportamiento a lo largo de los años.`,
    },
  ];
  ngOnInit(): void {
    this.inputForm.valueChanges.subscribe((formValues) => {
      if (this.inputForm.valid) {
        const { cM, cF, bM, bF, o, p, ind, mc, ma, e, r } = formValues;
        console.log(formValues);

        const input: SimulationInput = {
          cM,
          cF,
          bM,
          bF,
          o,
          p,
          indn: ind,
          mc,
          ma,
          e,
          r,
        };

        this.simulationStore.reactToInputChanges(input);
      }
    });
    this.subs = this.simulationResult$
      .pipe(debounceTime(500))
      .subscribe((data) => {});
  }

  scrollBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
