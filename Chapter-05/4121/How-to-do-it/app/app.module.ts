import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {ArticleComponent} from './article.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    ArticleComponent
  ],
  bootstrap: [
    ArticleComponent
  ]
})
export class AppModule {}
