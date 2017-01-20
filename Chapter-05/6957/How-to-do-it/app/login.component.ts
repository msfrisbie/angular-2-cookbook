import {Component} from '@angular/core';
import {AuthService, AuthState} from './authentication.service';

@Component({
  selector: 'login',
  template: `
    <button *ngIf="!loggedIn" 
            (click)="login()">
      Login
    </button>
    <button *ngIf="loggedIn" 
            (click)="logout()">
      Logout
    </button>
  `
})
export class LoginComponent {
  loggedIn:boolean;

  constructor(private authService_:AuthService) {
    authService_.authChange.subscribe(
      newAuthState =>
        this.loggedIn = (newAuthState === AuthState.LoggedIn));
  }

  login():void {
    this.authService_.login();
  }

  logout():void {
    this.authService_.logout();
  }
}
