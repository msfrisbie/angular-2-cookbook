import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SearchComponent} from './search.component';
import {APIService} from './api.service';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    SearchComponent
  ],
  providers: [
    APIService
  ],
  bootstrap: [
    SearchComponent
  ]
})
export class AppModule {}
