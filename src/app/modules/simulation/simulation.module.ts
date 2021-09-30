import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulationRoutingModule } from './simulation-routing.module';
import { SimulationComponent } from './simulation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SimulationComponent],
  imports: [
    CommonModule,
    SimulationRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class SimulationModule {}
