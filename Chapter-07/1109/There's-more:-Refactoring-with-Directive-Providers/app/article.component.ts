import {Component} from '@angular/core';
import {ArticleService} from './article.service';
import {Article} from './article-source.interface';

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
  article:Article;
  
  constructor(private articleService_:ArticleService) { 
    this.article = articleService_.getArticle();
  }
}
