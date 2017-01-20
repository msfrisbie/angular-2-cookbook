import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {RootComponent} from './root.component';
import {ArticleComponent} from './article.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
  declarations: [
    RootComponent,
    ArticleComponent
  ],
  entryComponents: [
    ArticleComponent
  ],
  bootstrap: [
    RootComponent
  ]
})
export class Ng2AppModule {
  constructor(public upgrade: UpgradeModule){}
}