import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ArticleComponent} from './article.component';
import {TextEditorComponent} from './text-editor.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ArticleComponent,
    TextEditorComponent
  ],
  bootstrap: [
    ArticleComponent
  ]
})
export class AppModule {}
