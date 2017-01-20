import {Component} from '@angular/core';

@Component({
  selector: 'article-list',
  template: `
    <div *ngFor="let article of articles; let i = index">
      <h1 *ngIf="article.active">
        {{i}}: {{article.title}}
      </h1>
    </div>
  `
})
export class ArticleListComponent {
  articles:Array<Object> = [
    {title: 'Foo', active: true}, 
    {title: 'Bar', active: false},
    {title: 'Baz', active: true}
  ];
}
