import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';

@Component({
  template: `
    <h2>Profile view</h2>
    Username: <input #un value="{{username | async}}">
    <button (click)=update(un.value)>Update</button>
  `
})
export class ProfileComponent {
  username:Observable<string>;

  constructor(private authService_:AuthService) { 
    this.username = authService_.usernameEmitter;
  }

  update(username:string):void {
    this.authService_.login(username);
  }
}
