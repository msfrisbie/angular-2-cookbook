import {Component, Inject} from '@angular/core';
import {ArticleToken} from './article.token';

@Component({
  selector: 'article',
  template: `
    <h2>{{article.title}}</h2>
    <p>{{article.body}}</p>
    <p *ngIf="article.notes">
      <i>Notes: {{article.notes}}</i>
    </p>
  `
})
export class ArticleComponent {
  article:Object;
  
  constructor(@Inject(ArticleToken) private articleService_) { 
    this.article = articleService_.getArticle();
  }
}
