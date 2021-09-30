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
  chartData: any;
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
      in: new FormControl(0, [Validators.required, Validators.min(0)]),
      mc: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      ma: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      e: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      r: new FormControl(0, [
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
  ngOnInit(): void {
    this.inputForm.valueChanges.subscribe((formValues) => {
      if (this.inputForm.valid) {
        const { cM, cF, bM, bF, o, p } = formValues;

        const input: SimulationInput = {
          cM,
          cF,
          bM,
          bF,
          o,
          p,
        };

        this.simulationStore.reactToInputChanges(input);
      }
    });
    this.subs = this.simulationResult$
      .pipe(debounceTime(500))
      .subscribe((data) => {
        this.chartData = {
          labels: [
            'Número se corderos',
            'Número de corderas',
            'Número de borregos',
            'Número de borregas',
            'Número de ovejas',
            'Número de padrotes',
          ],
          datasets: [
            {
              data: [
                data.result?.cM,
                data.result?.cF,
                data.result?.bM,
                data.result?.bF,
                data.result?.o,
                data.result?.p,
              ],
              backgroundColor: [
                '#d9ed92',
                '#b5e48c',
                '#99d98c',
                '#76c893',
                '#52b69a',
                '#34a0a4',
              ],
            },
          ],
        };
      });
  }

  scrollBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
