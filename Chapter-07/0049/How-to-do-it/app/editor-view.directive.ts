import {Directive} from '@angular/core';
import {ArticleService} from './article.service';
import {articleFactory} from './article.factory';
import {ArticleToken} from './article.token';

@Directive({
  selector: '[editor-view]',
  providers: [    
    {provide: ArticleToken,
      useFactory: articleFactory(true),
      deps: [ArticleService]
    }
  ]
})
export class EditorViewDirective {}
