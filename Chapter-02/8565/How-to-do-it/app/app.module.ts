import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ArticleComponent} from './article.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ArticleComponent
  ],
  bootstrap: [
    ArticleComponent
  ]
})
export class AppModule {}
