import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { Results } from '../models/results.model';
import { SimulationInput } from '../models/simulation-input.model';
import { SimulationService } from '../services/simulation.service';

export interface SimulationState {
  result: Results | null;
}

@Injectable()
export class SimulationStore extends ComponentStore<SimulationState> {
  constructor(private simulationService: SimulationService) {
    super({
      result: {
        cM: 0,
        cF: 0,
        bM: 0,
        bF: 0,
        o: 0,
        p: 0,
        total: 0,
      },
    });
  }

  readonly simulationResult$: Observable<SimulationState> = this.select(
    (state) => state
  );

  readonly reactToInputChanges = this.updater(
    (state, input: SimulationInput) => {
      // TODO add logic here
      const result = this.simulationService.makeSimulation(input);
      return {
        result,
      };
    }
  );
}
