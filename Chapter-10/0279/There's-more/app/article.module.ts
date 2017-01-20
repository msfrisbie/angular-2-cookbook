import {NgModule} from '@angular/core';
import {ArticleComponent} from './article.component';
import {Routes, RouterModule} from '@angular/router';
import {AuthModule} from './auth.module';

const articleRoutes:Routes = [
  {
    path: '',
    component: ArticleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(articleRoutes),
    AuthModule
  ],
  declarations: [
    ArticleComponent
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleModule {}