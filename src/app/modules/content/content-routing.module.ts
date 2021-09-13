import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: ':id', component: CategoryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
