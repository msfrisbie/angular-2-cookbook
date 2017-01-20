import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {OuterComponent} from './outer.component';
import {InnerComponent} from './inner.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    OuterComponent,
    InnerComponent
  ],
  bootstrap: [
    OuterComponent
  ]
})
export class AppModule {}
