import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService_:AuthService, 
    private router_:Router) {}

  canActivate():Observable<boolean> {
    return this.authService_.usernameEmitter.map(username => { 
      if (!username) {
        this.router_.navigate(['login']);
      } else {
        return true;
      }
    }).take(1);
  }
}

@Injectable()
export class LogoutGuardService implements CanActivate {  
  constructor(private authService_:AuthService, 
    private router_:Router) {}

  canActivate():boolean {
    this.authService_.logout();
    this.router_.navigate(['']);
    return true;
  }
}