import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {RootComponent} from './root.component';
import {DefaultComponent} from './default.component';
import {ArticleComponent} from './article.component';
import {LocationStrategy, HashLocationStrategy} 
  from '@angular/common';


const appRoutes:Routes = [
  {path: 'article', component: ArticleComponent},
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
    RootComponent
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
