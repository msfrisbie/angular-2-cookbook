import {Component, ViewChild} from '@angular/core';
import {FeedbackComponent} from './feedback.component';

@Component({
  selector: 'article',
  template: `
    <input type="checkbox" 
           (click)="changeLikesEnabled($event)">
    <feedback [val]="likes"></feedback>
  `
})
export class ArticleComponent {
  @ViewChild(FeedbackComponent) 
    feedbackComponent:FeedbackComponent;
  likes:number = 0;

  incrementLikes():void {
    this.likes++;
  }
  
  changeLikesEnabled(e:Event):void {
    this.feedbackComponent.setLikeEnabled(e.target.checked);
  }
}