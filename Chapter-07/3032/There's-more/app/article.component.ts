import {Component, Inject} from '@angular/core';
import {EditorArticleService} from './editor-article.service';

@Component({
  selector: 'article',
  template: `
    <h2>{{title}}</h2>
    <p>{{body}}</p>
  `
})
export class ArticleComponent {
  title:string;
  body:string;
  
  constructor(private editorArticleService_:EditorArticleService) {
    let article = editorArticleService_.getArticle();
    this.title = article.title;
    this.body = article.body;
  }
}
