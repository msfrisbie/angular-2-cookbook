import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ArticleEditorComponent} from './article-editor.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    ArticleEditorComponent 
  ],
  bootstrap: [
    ArticleEditorComponent 
  ]
})
export class AppModule {}
