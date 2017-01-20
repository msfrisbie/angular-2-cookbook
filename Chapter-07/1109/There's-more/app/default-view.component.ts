import {Component} from '@angular/core';
import {ArticleService} from './article.service';

@Component({
  selector: 'default-view',
  template: `
    <h3>Default view</h3>
    <ng-content></ng-content>
  `
})
export class DefaultViewComponent {}
