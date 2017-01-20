import {Component} from '@angular/core';

@Component({
  selector: 'article',
  template: `
    <input #title 
           (keyup.enter)="setTitle(title.value)"
           (keyup)="checkStale(title.value)">
    <h1 [style.color]="isStale ? 'red' : 'green'">
      {{myTitle}}
    </h1>
  `
})
export class ArticleComponent {
  myTitle:string = '';
  private isStale:boolean = false;

  setTitle(val:string):void {
    this.myTitle = val;
  }
  checkStale(val:string):void {
    this.isStale = val !== this.myTitle;
  }
}
