import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {RootComponent} from './root.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
  bootstrap: [
    RootComponent
  ],
  declarations: [
    RootComponent
  ]
})
export class Ng2AppModule {
  constructor(public upgrade: UpgradeModule){}
}