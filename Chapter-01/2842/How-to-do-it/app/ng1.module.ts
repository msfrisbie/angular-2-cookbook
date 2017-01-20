import 'angular';
import {ng1Article} from './article.component';
import {ArticleService} from './article.service';
import {downgradeInjectable} from '@angular/upgrade/static';

export const Ng1AppModule = angular.module('Ng1AppModule', [])
  .component('ng1Article', ng1Article)
  .factory('ArticleService', downgradeInjectable(ArticleService));
  