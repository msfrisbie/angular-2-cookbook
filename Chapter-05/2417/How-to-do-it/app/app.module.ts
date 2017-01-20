import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RootComponent} from './root.component';
import {NodeComponent} from './node.component';
import {PubSubService} from './publish-subscribe.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    RootComponent,
    NodeComponent
  ],
  providers: [
    PubSubService
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
