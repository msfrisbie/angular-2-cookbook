import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  template: `
    <h3>Article Detail</h3>
    <p>Showing article {{articleId}}</p>
    <a [routerLink]="'../'">Back up</a>
  `
})
export class ArticleDetailComponent {
  articleId:number;
  
  constructor(private activatedRoute_:ActivatedRoute) {
    activatedRoute_.params
      .subscribe(params => {
        console.log('Detail params:');
        console.log(window.location.href)
        console.log(params);
        
        this.articleId = params['articleId']
      });
  }
}
