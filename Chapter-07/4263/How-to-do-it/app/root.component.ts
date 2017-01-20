import {Component} from '@angular/core';
import {ArticleService} from './article.service';

@Component({
  selector: 'root',
  template: `
    <h1>app component!</h1>
    <button (click)="fillArticle()">Show article</button>
    <h2>{{title}}</h2>
  `
})
export class RootComponent {
  title:string;

  constructor(private articleService_:ArticleService) {}
  
  fillArticle():void {
    this.title = this.articleService_.getTitle();    
  }
}
