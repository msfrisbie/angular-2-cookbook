import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ArticleComponent} from './article.component';
import {AdSectionComponent} from './ad-section.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ArticleComponent,
    AdSectionComponent
  ],
  bootstrap: [
    ArticleComponent
  ]
})
export class AppModule {}
