import {Component} from '@angular/core';

@Component({
  selector: 'article',
  template: `
    <input #title (keyup)="0">
    <h1>{{title.value}}</h1>
  `
})
export class ArticleComponent {}
