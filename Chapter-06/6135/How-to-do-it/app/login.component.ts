import {Component, ngOnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  template: `
    <h2>Login view</h2>
    <input #un>
    <button (click)="login(un.value)">Login</button>
  `
})
export class LoginComponent implements OnDestroy{
  private usernameSubscription_:Subscription;
  
  constructor(private authService_:AuthService, 
    private router_:Router) { }

  login(newUsername:string):void {
    this.authService_.login(newUsername);
    this.usernameSubscription_ = this.authService_
      .usernameEmitter
      .subscribe(username => {
        if (!!username) {
          this.router_.navigate(['']);
        }
      });
  }
  
  ngOnDestroy() {
    this.usernameSubscription_ &&
    this.usernameSubscription_.unsubscribe();
  }
} 
