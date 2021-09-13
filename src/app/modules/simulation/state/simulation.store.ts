import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export interface SimulationState {
  rand: number;
}

@Injectable()
export class SimulationStore extends ComponentStore<SimulationState> {
  constructor() {
    super({ rand: 0 });
  }

  readonly simulationResult$: Observable<SimulationState> = this.select(
    (state) => state
  );

  readonly changeSomeValueAtStore = this.updater((state, rand: number) => {
    // TODO add logic here
    return {
      rand,
    };
  });
}
