import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsComponent} from '@angular/forms';
import {ArticleComponent} from './article.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsComponent
  ],
  declarations: [
    ArticleComponent
  ],
  bootstrap: [
    ArticleComponent
  ]
})
export class AppModule {}
