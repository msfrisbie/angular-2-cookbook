import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {RootComponent} from './root.component';
import {LinkComponent} from './link.component';
//import {ArticleModule} from './article.module';

const appRoutes:Routes = [
  {
    path: 'article',
    loadChildren: './app/article.module#ArticleModule'
    //component: ArticleComponent
  },
  {
    path: '**',
    component: LinkComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    //ArticleComponent,
    LinkComponent,
    RootComponent
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
