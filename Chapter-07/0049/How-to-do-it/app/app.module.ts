import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RootComponent} from './root.component';
import {ArticleComponent} from './article.component';
import {ArticleService} from './article.service';
import {DefaultViewDirective} from './default-view.directive';
import {EditorViewDirective} from './editor-view.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    RootComponent,
    ArticleComponent,
    DefaultViewDirective,
    EditorViewDirective
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
