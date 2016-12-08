import {Component} from '@angular/core';

@Component({
  selector: 'app-article',
  template: `
    <h1>
      {{ title }}
    </h1>
  `
})
export class ArticleComponent {
  title: string = 'Captain Hook Sues Over Spork Snafu';
}

