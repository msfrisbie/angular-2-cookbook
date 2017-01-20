import {Component} from '@angular/core';

@Component({
  selector: 'article-list',
  template: `
    <template ngFor let-article [ngForOf]="articles" let-i="index">
      <div>
        <template [ngIf]="article.active">
          <h1>
            {{i}}: {{ article.title }}
          </h1>
        </template>
      </div>
    </template>
  `
})
export class ArticleListComponent {
  articles:Array<Object> = [
    {title: 'Foo', active: true}, 
    {title: 'Bar', active: false},
    {title: 'Baz', active: true}
  ];
}
