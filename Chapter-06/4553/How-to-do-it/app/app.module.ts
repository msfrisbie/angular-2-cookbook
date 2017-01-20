import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {RootComponent} from './root.component';
import {DefaultComponent} from './default.component';
import {ArticleComponent} from './article.component';
import {ArticleListComponent} from './article-list.component';
import {ArticleDetailComponent} from './article-detail.component';

const appRoutes:Routes = [
  {path: 'article', component: ArticleComponent,
    children: [
      {path: '', component: ArticleListComponent}, 
      {path: ':articleId', component: ArticleDetailComponent}
    ]
  },
  {path: '**', component: DefaultComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    DefaultComponent,
    ArticleComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    RootComponent
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
