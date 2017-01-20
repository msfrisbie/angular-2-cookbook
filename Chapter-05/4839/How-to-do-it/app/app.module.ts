import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ClickObserverComponent} from './click-observer.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ClickObserverComponent
  ],
  bootstrap: [
    ClickObserverComponent
  ]
})
export class AppModule {}
