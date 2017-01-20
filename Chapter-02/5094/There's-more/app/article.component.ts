import {Component} from '@angular/core';

@Component({
  selector: 'article',
  template: `
    <input #title (keyup)="setTitle(title.value)">
    <h1>{{myTitle}}</h1>
  `
})
export class ArticleComponent {
  myTitle:string;
  
  setTitle(val:string) {
    this.myTitle = val;
  }
}
