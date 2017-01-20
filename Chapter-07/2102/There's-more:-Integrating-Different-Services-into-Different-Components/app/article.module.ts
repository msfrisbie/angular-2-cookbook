import {NgModule} from '@angular/core';
import {ArticleComponent} from './article.component';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  bootstrap: [
    ArticleComponent
  ],
  exports: [
    ArticleComponent  
  ]
})
export class ArticleModule {}
