import {Component} from '@angular/core';

@Component({
  selector: 'article',
  template: `
    <h2>{{title}}</h2>
  `
})
export class ArticleComponent {
  title:string = 'Survey Indicates Sippy Cup Best Way to Drink Rare Wine';
}

