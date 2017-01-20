import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RootComponent} from './root.component';
import {ArticleComponent} from './article.component';
import {FeedbackComponent} from './feedback.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    RootComponent,
    ArticleComponent,
    FeedbackComponent
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
