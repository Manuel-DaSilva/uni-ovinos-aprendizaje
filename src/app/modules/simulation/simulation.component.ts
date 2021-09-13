import { Component } from '@angular/core';
import { SimulationStore } from './state/simulation.store';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  providers: [SimulationStore],
})
export class SimulationComponent {
  simulationResult$ = this.simulationStore.simulationResult$;

  constructor(private simulationStore: SimulationStore) {}

  updateSomeValue(n: number) {
    this.simulationStore.changeSomeValueAtStore(n);
  }
}
