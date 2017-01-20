import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RootComponent} from './root.component';
import {ArticleComponent} from './article.component';
import {LOGO_URL} from './logo-url.token';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    RootComponent,
    ArticleComponent
  ],
  providers: [
    {provide: LOGO_URL, useValue: 
      'https://angular.io/resources/images/logos/standard/logo-nav.png'}
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
