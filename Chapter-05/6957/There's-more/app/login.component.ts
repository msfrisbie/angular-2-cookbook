import {Component, ngOnDestroy} from '@angular/core';
import {AuthService, AuthState} from './authentication.service';
import {Subscription} from 'rxjs/Subscription';


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
export class LoginComponent implements OnDestroy {
  loggedIn:boolean;
  private authChangeSubscription_: Subscription;

  constructor(private authService_:AuthService) {
    this.authChangeSubscription_ = 
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
  ngOnDestroy() {
    this.authChangeSubscription_.unsubscribe();
  }
}
