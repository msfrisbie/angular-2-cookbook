import {Component, Input} from '@angular/core';
import {ArticleComponent} from './article.component';

@Component({
  selector: 'feedback',
  template: `
    <h1>Number of likes: {{ val }}</h1>
    <button (click)="likeArticle()">Like this article!</button>
  `
})
export class FeedbackComponent {
  @Input() val:number;
  private articleComponent:ArticleComponent;
  
  constructor(articleComponent:ArticleComponent) {
    this.articleComponent = articleComponent;
  }
  
  likeArticle():void {
    this.articleComponent.incrementLikes();
  }
}