import {Component, Input} from '@angular/core';
import {downgradeComponent} from '@angular/upgrade/static';
import {Ng1AppModule} from './ng1.module';

@Component({
  selector: 'ng2-article',
  template: `
    <h1>{{title}}</h1>
    <p>Written by: {{author}}</p>
  `
})
export class ArticleComponent {
  @Input() author:string
  title:string = 'Unicycle Jousting Recognized as Olympic Sport';
}

Ng1AppModule.directive(
  'ng1Article',
  downgradeComponent({
    component: ArticleComponent, 
    inputs: ['author']
  }));