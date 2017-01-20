import {Component, ContentChild} from '@angular/core';
import {FeedbackComponent} from './feedback.component';

@Component({
  selector: 'article',
  template: `
    <input type="checkbox" 
           (click)="changeLikesEnabled($event)">
    <ng-content></ng-content>
  `
})
export class ArticleComponent {
  @ContentChild(FeedbackComponent) 
    feedbackComponent:FeedbackComponent;
  likes:number = 0;
  
  incrementLikes():void {
    this.likes++;
  }
  
  changeLikesEnabled(e:Event):void {
    this.feedbackComponent.setLikeEnabled(e.target.checked);
  }
}