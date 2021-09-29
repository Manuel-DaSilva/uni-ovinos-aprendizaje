import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
@NgModule({
  exports: [ButtonModule, MenubarModule, CardModule],
})
export class PrimeModule {}
