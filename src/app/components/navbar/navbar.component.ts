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

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/',
        routerLinkActiveOptions: { exact: true },
      },

      {
        label: 'Simulación',
        icon: 'pi pi-chart-bar',
        routerLink: '/simulation',
        routerLinkActiveOptions: { exact: true },
      },
    ];
  }
}
