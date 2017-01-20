import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ArticleComponent} from './article.component';
import {ClickToRevealDirective} from './click-to-reveal.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ArticleComponent,
    ClickToRevealDirective
  ],
  bootstrap: [
    ArticleComponent
  ]
})
export class AppModule {}
