import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LogoComponent} from './logo.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    LogoComponent
  ],
  bootstrap: [
    LogoComponent
  ]
})
export class AppModule {}
