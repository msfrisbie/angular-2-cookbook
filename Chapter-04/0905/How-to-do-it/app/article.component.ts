import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'article',
  template: `
    <p></p>
  `
})
export class ArticleComponent {
  constructor(private http:Http) {
    // For demo purposes, have this plunk request itself to
    // avoid cross origin errors
    console.log(
      http.get('//run.plnkr.co/plunks/TBtcNDRelAOHDVpIuWw1')
      .toPromise());
  }
}