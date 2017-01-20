import {Component} from '@angular/core';

@Component({
  selector: 'article',
  template: `
    <p>{{currentDate|date}}</p>
    <h1>{{title}}</h1>
    <h3>Written by: {{author}}</h3>
  `
})
export class ArticleComponent {
  currentDate:date = new Date();
  title:string = `
    Flight Security Restrictions to Include 
    Insults, Mean Faces
  `;
  author:string = 'Jake';
}
