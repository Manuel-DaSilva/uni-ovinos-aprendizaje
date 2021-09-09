import { NgModule } from '@angular/core';

// material modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  exports: [MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule],
})
export class MaterialModule {}
