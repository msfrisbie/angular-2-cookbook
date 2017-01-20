import {NgModule} from '@angular/core';
import {ArticleComponent} from './article.component';
import {ArticleService} from './article.service';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  providers: [
    ArticleService  
  ],
  bootstrap: [
    ArticleComponent
  ],
  exports: [
    ArticleComponent  
  ]
})
export class ArticleModule {}
