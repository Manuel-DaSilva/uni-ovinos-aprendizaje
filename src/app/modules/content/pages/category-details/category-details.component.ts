import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { ContentItem } from '../../models/content-item.model';
import { ContentCategory } from '../../models/content-category.model';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryDetailsComponent {
  content: ContentItem[] = [];
  category: ContentCategory | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService,
    private router: Router
  ) {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    console.log(id);

    if (isNaN(id)) {
      this.router.navigateByUrl('404');
    }

    this.content = this.contentService.getContentByCategory(id);
    this.category = this.contentService.getCategoryById(id);
  }
}
