import {Component} from '@angular/core';

@Component({
  selector: 'article',
  template: `
    <h1 click-to-reveal>{{title}}</h1>
  `,
  styles: [`
    h1 {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      max-width: 300px;
    }
  `]
})
export class ArticleComponent { 
  title:string = `Presidential Candidates Respond to 
    Allegations Involving Ability to Dunk`;
}
