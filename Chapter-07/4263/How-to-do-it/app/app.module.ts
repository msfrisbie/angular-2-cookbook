import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RootComponent} from './root.component';
import {ArticleService} from './article.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    RootComponent
  ],
  providers: [
    ArticleService  
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
