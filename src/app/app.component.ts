import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-navbar></app-navbar>
    <main class="p-4 pt-0 w-full  mx-auto">
      <router-outlet></router-outlet>
      <p-scrollTop></p-scrollTop>
    </main>`,
})
export class AppComponent {}
