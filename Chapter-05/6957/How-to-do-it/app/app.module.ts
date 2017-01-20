import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LoginComponent} from './login.component';
import {AuthService} from './authentication.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthService  
  ],
  bootstrap: [
    LoginComponent
  ]
})
export class AppModule {}
