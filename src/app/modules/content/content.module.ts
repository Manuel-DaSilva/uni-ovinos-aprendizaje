import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';


@NgModule({
  declarations: [
    ContentComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
