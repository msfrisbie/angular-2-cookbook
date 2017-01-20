import {Component} from '@angular/core';

@Component({
  template: `
    <h3>Article List</h3>
    <p *ngFor="let articleId of articleIds">
      <a [routerLink]="articleId">
        Article {{articleId}}
      </a>
    </p>
  `
})
export class ArticleListComponent {
  articleIds:Array<number> = [1,2,3,4,5];
}
