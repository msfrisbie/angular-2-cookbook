import {Directive} from '@angular/core';
import {ArticleService} from './article.service';
import {articleFactory} from './article.factory';
import {ArticleToken} from './article.token';

@Directive({
  selector: '[default-view]',
  providers: [    
    {provide: ArticleToken, 
      useFactory: articleFactory(),
      deps: [ArticleService]
    }
  ]
})
export class DefaultViewDirective {}
