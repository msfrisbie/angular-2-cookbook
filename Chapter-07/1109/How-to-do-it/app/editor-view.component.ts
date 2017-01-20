import {Component } from '@angular/core';
import {ArticleService} from './article.service';
import {EditorArticleService} from './editor-article.service';

@Component({
  selector: 'editor-view',
  template: `
    <h3>Editor view</h3>
    <ng-content></ng-content>
  `,
  providers: [
    {provide: ArticleService, useClass: EditorArticleService}
  ]
})
export class EditorViewComponent {}
