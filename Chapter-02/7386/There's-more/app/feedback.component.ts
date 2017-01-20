import {Component, Input, Inject, forwardRef} from '@angular/core';
import {ArticleComponent} from './article.component';

@Component({
  selector: 'feedback',
  template: `
    <h1>Number of likes: {{ val }}</h1>
    <button (click)="likeArticle()"
            [disabled]="!likeEnabled">
      Like this article!
    </button>
  `
})
export class FeedbackComponent {
  private val:number;
  private likeEnabled:boolean = false;
  private articleComponent:ArticleComponent;
  
  constructor(@Inject(forwardRef(() => ArticleComponent)) 
      articleComponent:ArticleComponent) {

    this.articleComponent = articleComponent;
    this.updateLikes();
  }
  
  updateLikes() {
    this.val = this.articleComponent.likes;
  }
  
  likeArticle():void {
    this.articleComponent.incrementLikes();
    this.updateLikes();
  }
  
  setLikeEnabled(newEnabledStatus:boolean):void {
    this.likeEnabled = newEnabledStatus;
  }
}