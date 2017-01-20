import {Directive } from '@angular/core';
import {ArticleService} from './article.service';
import {EditorArticleService} from './editor-article.service';

@Directive({
  selector: '[editor-view]',
  providers: [
    {provide: ArticleService, useExisting: EditorArticleService}
  ]
})
export class EditorViewDirective {}
