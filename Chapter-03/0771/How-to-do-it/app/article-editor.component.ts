import {Component} from '@angular/core';

@Component({
  selector: 'article-editor',
  template: `
    <input [(ngModel)]="title">
    <input [(ngModel)]="title">
    <h2>{{title}}</h2>
  `
})
export class ArticleEditorComponent {
  title:string;
}
