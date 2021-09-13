import { Component } from '@angular/core';
import { ContentCategory } from './models/content-category.model';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})
export class ContentComponent {
  categories: ContentCategory[];
  constructor(private contentService: ContentService) {
    this.categories = contentService.getCategories();
  }
}
