import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ArticleComponent} from './article.component';
import {FeedbackComponent} from './feedback.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ArticleComponent,
    FeedbackComponent
  ],
  bootstrap: [
    ArticleComponent
  ]
})
export class AppModule {}
