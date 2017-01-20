import {Component} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'root',
  template: `
    <h1>Root component</h1>
    <router-outlet></router-outlet>
  `
})
export class RootComponent {
  constructor(private authService_:AuthService) {
    console.log(authService_);
  }
}