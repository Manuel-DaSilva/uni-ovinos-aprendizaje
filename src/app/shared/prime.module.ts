import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    CardModule,
    MessageModule,
    MessagesModule,
  ],
})
export class PrimeModule {}
