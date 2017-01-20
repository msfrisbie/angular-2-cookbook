import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'article',
  template: `
    <h1>{{title}}</h1>
    <p>{{author}}</p>
  `
})
export class ArticleComponent {
  title:string;
  author:string;
  constructor (private http: Http) {
    http.get('static/article.json')
      .map(response => response.json())
      .subscribe(
        article => {
            this.title = article.title;
            this.author = article.author;
        },
        error => console.error(error));
  }
}
