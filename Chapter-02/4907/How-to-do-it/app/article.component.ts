import {Component} from '@angular/core';

@Component({
  selector: 'article',
  template: `
    <feedback [val]="likes"></feedback>
  `
})
export class ArticleComponent {
  likes:number = 0;
  
  incrementLikes():void {
    this.likes++;
  }
}