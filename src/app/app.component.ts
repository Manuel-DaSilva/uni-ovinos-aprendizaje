import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-navbar></app-navbar>
    <main class="p-4 pt-0  md:mt-8">
      <router-outlet></router-outlet>
    </main>`,
})
export class AppComponent {}
