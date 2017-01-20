import {Directive} from '@angular/core';
import {EditorArticleService} from './editor-article.service';

@Directive({
  selector: '[editor-view]',
  providers: [EditorArticleService]
})
export class EditorViewDirective {}
