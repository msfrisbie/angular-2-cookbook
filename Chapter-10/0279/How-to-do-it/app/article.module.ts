import {NgModule} from '@angular/core';
import {ArticleComponent} from './article.component';
import {Routes, RouterModule} from '@angular/router';

const articleRoutes:Routes = [
  {
    path: '',
    component: ArticleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(articleRoutes)
  ],
  declarations: [
    ArticleComponent
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleModule {}