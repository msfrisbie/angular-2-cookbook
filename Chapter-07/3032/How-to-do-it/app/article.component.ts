import {Component, Inject} from '@angular/core';
import {LOGO_URL} from './logo-url.token';

@Component({
  selector: 'article',
  template: `
    <img src="{{logoUrl}}">
    <h2>Fool and His Money Reunited at Last</h2>
    <p>Author: Jake Hsu</p>
  `
})
export class ArticleComponent {
  logoUrl:string;
  
  constructor(@Inject(LOGO_URL) private logoUrl_) {
    this.logoUrl = logoUrl_;
  }
}
