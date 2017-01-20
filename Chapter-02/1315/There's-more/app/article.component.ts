import {Component, ViewChild, ngAfterViewInit} from '@angular/core';
import {FeedbackComponent} from './feedback.component';

@Component({
  selector: 'article',
  template: `
    <input type="checkbox" 
           (click)="changeLikesEnabled($event)">
    <feedback [val]="likes"></feedback>
  `
})
export class ArticleComponent implements AfterViewInit {
  @ViewChild(FeedbackComponent) 
    feedbackComponent:FeedbackComponent;
  likes:number = 0;
  
  constructor() {
    console.log(this.feedbackComponent);
  }
  
  ngAfterViewInit() {
    console.log(this.feedbackComponent);
  }
  
  incrementLikes():void {
    this.likes++;
  }
  
  changeLikesEnabled(e:Event):void {
    this.feedbackComponent.setLikeEnabled(e.target.checked);
  }
}