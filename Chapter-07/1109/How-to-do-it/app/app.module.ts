import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RootComponent} from './root.component';
import {ArticleComponent} from './article.component';
import {DefaultViewComponent} from './default-view.component';
import {EditorViewComponent} from './editor-view.component';
import {ArticleComponent} from './article.component';
import {ArticleService} from './article.service';
import {EditorArticleService} from './editor-article.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    RootComponent,
    ArticleComponent,
    DefaultViewComponent,
    EditorViewComponent
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
