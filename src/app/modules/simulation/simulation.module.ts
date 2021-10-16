import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulationRoutingModule } from './simulation-routing.module';
import { SimulationComponent } from './simulation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SimulationYearReportComponent } from './components/simulation-year-report/simulation-year-report.component';

@NgModule({
  declarations: [SimulationComponent, SimulationYearReportComponent],
  imports: [
    CommonModule,
    SimulationRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class SimulationModule {}
