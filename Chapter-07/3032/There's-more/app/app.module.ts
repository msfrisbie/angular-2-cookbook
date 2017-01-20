import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RootComponent} from './root.component';
import {ArticleComponent} from './article.component';
import {EditorViewDirective} from './editor-view.directive';
import {EditorArticleService, MockEditorArticleService} 
  from './editor-article.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    RootComponent,
    ArticleComponent,
    EditorViewDirective
  ],
  providers: [
    {provide: EditorArticleService, useValue: MockEditorArticleService}
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
