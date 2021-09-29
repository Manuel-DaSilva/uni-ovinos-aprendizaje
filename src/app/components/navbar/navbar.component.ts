import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  constructor() {}

  items: MenuItem[] = [];

  //   <button>Inicio</button>
  // <button routerLink="sections">Seciones</button>
  // <button routerLink="content">Contenido</button>
  // <button routerLink="simulation">Simulación</button>
  // <button routerLink="test">Preguntas</button>

  // <button pButton type="button" label="Click"></button>

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/',
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Contenido',
        icon: 'pi pi-book',
        routerLink: '../content',
      },
      {
        label: 'Simulación',
        icon: 'pi pi-chart-bar',
        routerLink: '/simulation',
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Preguntas',
        icon: 'pi pi-comments',
        routerLink: '../test',
        routerLinkActiveOptions: { exact: true },
      },
    ];
  }
}
// <div class="flex w-full h-screen items-center justify-center">
//   <mat-card class="cursor-pointer mr-2" routerLink="../content"
//     >Contenido</mat-card
//   >
//   <mat-card class="cursor-pointer mx-2" routerLink="../simulation"
//     >Simulación</mat-card
//   >
//   <mat-card class="cursor-pointer ml-2" routerLink="../test"
//     >Evaluación</mat-card
//   >
// </div>
