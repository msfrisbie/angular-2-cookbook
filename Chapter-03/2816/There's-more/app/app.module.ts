import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {ArticleEditorComponent } from './article-editor.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    ArticleEditorComponent 
  ],
  bootstrap: [
    ArticleEditorComponent 
  ]
})
export class AppModule {}
