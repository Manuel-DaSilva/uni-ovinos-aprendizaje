import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Results } from '../../models/results.model';

@Component({
  selector: 'app-simulation-year-report',
  templateUrl: './simulation-year-report.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimulationYearReportComponent implements OnInit {
  @Input() data: Results | null = null;
  constructor() {}

  chartData: any;

  ngOnInit(): void {
    if (this.data != null) {
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
              this.data?.cM,
              this.data?.cF,
              this.data?.bM,
              this.data?.bF,
              this.data?.o,
              this.data?.p,
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
    }
  }
}
