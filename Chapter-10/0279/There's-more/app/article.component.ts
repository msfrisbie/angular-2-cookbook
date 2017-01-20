import {Component} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'article',
  template: `
    <h1>{{title}}</h1>
  `
})
export class ArticleComponent {
  title:string = 
    'Baboon\'s Stock Picks Crush Top-Performing Hedge Fund';

  constructor(private authService_:AuthService) {
    console.log(authService_);
  }
}

