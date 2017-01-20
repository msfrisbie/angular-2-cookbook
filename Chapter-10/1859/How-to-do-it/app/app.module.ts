import {NgModule} from '@angular/core';
import {WorkerAppModule} from '@angular/platform-webworker';
import {AppModule} from './app.module';
import {ArticleComponent} from './article.component';

@NgModule({
  imports: [
    WorkerAppModule
  ], 
  bootstrap: [
    ArticleComponent
  ],
  declarations: [
    ArticleComponent
  ]
})
export class AppModule {}
