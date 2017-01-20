import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {RootComponent} from './root.component';
import {LinkComponent} from './link.component';
import {AuthModule} from './auth.module';

const appRoutes:Routes = [
  {
    path: 'article',
    loadChildren: './app/article.module#ArticleModule'
  },
  {
    path: '**',
    component: LinkComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AuthModule.forRoot()
  ],
  declarations: [
    LinkComponent,
    RootComponent
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
