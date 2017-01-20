import {Component} from '@angular/core';

@Component({
  selector: 'article',
  template: `
    <h1>{{ title }}</h1>
    <p>Shares: {{ shareCt }}</p>
    <button (click)="share($event)">Share</button>
  `
})
export class ArticleComponent {
  title:string = 'Police Apprehend Tiramisu Thieves';
  shareCt:number = 0;
  share(e:Event):void {
    console.log(e);  // MouseEvent
    ++this.shareCt;
  }
}

