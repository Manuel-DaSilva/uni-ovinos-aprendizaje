import { Injectable } from '@angular/core';
import { Results } from '../models/results.model';
import { SimulationInput } from '../models/simulation-input.model';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  constructor() {}

  makeSimulation(input: SimulationInput): Results {
    const {
      cM,
      cF,
      bM,
      bF,
      o,
      p,
      rmh = 1,
      indn = 0,
      mc = 0,
      ma = 0,
      e = 0,
      r = 0,
    } = input;

    // ?? TODO HERE LOGIC

    const results: Results = {
      cM: Math.random(),
      cF: Math.random(),
      bM: Math.random(),
      bF: Math.random(),
      o: Math.random(),
      p: Math.random(),
      total: Math.random(),
    };

    return results;
  }
}
