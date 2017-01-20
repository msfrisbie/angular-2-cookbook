import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  template: `
    <h3>Article List</h3>
    <p *ngFor="let articleId of articleIds">
      <a [routerLink]="[articleId, {detailData: 'bar'}]">
        Article {{articleId}}
      </a>
    </p>
  `
})
export class ArticleListComponent {
  articleIds:Array<number> = [1,2,3,4,5];
  
  constructor(private activatedRoute_:ActivatedRoute) {
    activatedRoute_.params
      .subscribe(params => {
        console.log('List params:');
        console.log(window.location.href)
        console.log(params);
      });
  }
}
