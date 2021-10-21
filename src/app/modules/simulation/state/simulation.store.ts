import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { Results } from '../models/results.model';
import { SimulationInput } from '../models/simulation-input.model';
import { SimulationService } from '../services/simulation.service';

export interface SimulationState {
  results: Results[];
}

@Injectable()
export class SimulationStore extends ComponentStore<SimulationState> {
  constructor(private simulationService: SimulationService) {
    super({
      results: [],
    });
  }

  readonly simulationResult$: Observable<SimulationState> = this.select(
    (state) => state
  );

  readonly reactToInputChanges = this.updater(
    (state, input: SimulationInput) => {
      // TODO add logic here
      const results = this.simulationService.makeSimulations(input);
      return {
        results,
      };
    }
  );
}
