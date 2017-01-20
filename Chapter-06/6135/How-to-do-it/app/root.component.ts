import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'root',
  template: `
    <h3 *ngIf="!!(username | async)">
      Hello, {{username | async}}.
    </h3>
    <a [routerLink]="['']">Default</a>
    <a [routerLink]="['profile']">Profile</a>
    <a *ngIf="!(username | async)"
       [routerLink]="['login']">Login</a>
    <a *ngIf="!!(username | async)"
       [routerLink]="['logout']">Logout</a>
    <router-outlet></router-outlet>
  `
})
export class RootComponent {
  username:Observable<string>;

  constructor(private authService_:AuthService) {
    this.username = authService_.usernameEmitter;
  }
} 
