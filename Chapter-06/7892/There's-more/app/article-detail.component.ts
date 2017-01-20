import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  template: `
    <h3>Article Detail</h3>
    <p>Showing article {{ (params | async).articleId }}</p>
    <a [routerLink]="'../'">Back up</a>
  `
})
export class ArticleDetailComponent {
  params:Observable<Params>;
  constructor(private activatedRoute_: ActivatedRoute) {
    this.params = activatedRoute_.params;
  }
}
