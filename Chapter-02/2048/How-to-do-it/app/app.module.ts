import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ArticleComponent} from './article.component';
import {ArticleListComponent} from './article-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ArticleComponent,
    ArticleListComponent
  ],
  bootstrap: [
    ArticleListComponent
  ]
})
export class AppModule {}
