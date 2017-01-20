import {Component, ContentChild, ngAfterContentInit} from '@angular/core';
import {FeedbackComponent} from './feedback.component';

@Component({
  selector: 'article',
  template: `
    <input type="checkbox" 
           (click)="changeLikesEnabled($event)">
    <ng-content></ng-content>
  `
})
export class ArticleComponent implements AfterContentInit {
  @ContentChild(FeedbackComponent) 
    feedbackComponent:FeedbackComponent;
  likes:number = 0;
  
  constructor() {
    console.log(this.feedbackComponent);
  }
  
  ngAfterContentInit() {
    console.log(this.feedbackComponent);
  }
  
  incrementLikes():void {
    this.likes++;
  }
  
  changeLikesEnabled(e:Event):void {
    this.feedbackComponent.setLikeEnabled(e.target.checked);
  }
}