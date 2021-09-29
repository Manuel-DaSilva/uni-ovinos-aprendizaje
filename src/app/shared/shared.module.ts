import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeModule } from './prime.module';
import { BackgroundImagePipe } from './background-image.pipe';

@NgModule({
  declarations: [BackgroundImagePipe],
  imports: [CommonModule, PrimeModule],
  exports: [PrimeModule, BackgroundImagePipe],
})
export class SharedModule {}
