import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RootComponent} from './root.component';
import {ArticleModule} from './article.module';

@NgModule({
  imports: [
    BrowserModule,
    ArticleModule
  ],
  declarations: [
    RootComponent
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
