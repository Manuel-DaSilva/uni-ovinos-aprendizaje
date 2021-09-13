import { Injectable } from '@angular/core';
import { categories } from '../data/categories';
import { content } from '../data/content';
import { ContentCategory } from '../models/content-category.model';
import { ContentItem } from '../models/content-item.model';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor() {}

  getCategories(): ContentCategory[] {
    return categories;
  }

  getContentByCategory(id: number): ContentItem[] {
    const allContent = content;
    return allContent.filter((c) => c.categoryId == id);
  }
}
