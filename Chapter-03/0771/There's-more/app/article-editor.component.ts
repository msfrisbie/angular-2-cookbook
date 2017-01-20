import {Component} from '@angular/core';

@Component({
  selector: 'article-editor',
  template: `
    <input [value]="title" (input)="title=$event.target.value">
    <input [value]="title" (input)="title=$event.target.value">
    <h2>{{title}}</h2>
  `
})
export class ArticleEditorComponent {
  title:string = '';
}

