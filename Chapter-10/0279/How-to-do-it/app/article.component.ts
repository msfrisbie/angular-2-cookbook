import {Component} from '@angular/core';

@Component({
  selector: 'article',
  template: `
    <h1>{{title}}</h1>
  `
})
export class ArticleComponent {
  title:string = 
    'Baboon\'s Stock Picks Crush Top-Performing Hedge Fund';
}

