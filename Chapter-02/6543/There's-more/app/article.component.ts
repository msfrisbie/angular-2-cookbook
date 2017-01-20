import {Component} from '@angular/core';

@Component({
  selector: 'article',
  template: `
    <h1>{{title}}</h1>
    <attribution bind-author="name"></attribution>
  `
})
export class ArticleComponent {
  title:string = 'Belching Choir Begins World Tour';
  name:string = 'Jake';
}
