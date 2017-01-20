import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ArticleListComponent} from './article-list.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ArticleListComponent
  ],
  bootstrap: [
    ArticleListComponent
  ]
})
export class AppModule {}
