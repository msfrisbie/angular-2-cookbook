import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ArticleComponent} from './article.component';
import {AttributionComponent} from './attribution.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ArticleComponent, 
    AttributionComponent
  ],
  bootstrap: [
    ArticleComponent
  ]
})
export class AppModule {}
