import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    CardModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    SliderModule,
    DividerModule,
    ChartModule,
  ],
})
export class PrimeModule {}
