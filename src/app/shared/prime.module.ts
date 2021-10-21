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
import { ScrollTopModule } from 'primeng/scrolltop';

import { TabViewModule } from 'primeng/tabview';

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
    ScrollTopModule,
    TabViewModule,
  ],
})
export class PrimeModule {}
