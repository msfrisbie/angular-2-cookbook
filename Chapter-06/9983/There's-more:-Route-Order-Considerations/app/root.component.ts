import {Component} from '@angular/core';

@Component({
  selector: 'root',
  template: `
    <h1>Root component</h1>
    <a [routerLink]="[defaultPath]">Default</a>
    <a [routerLink]="[articlePath]">Article</a>
    <router-outlet></router-outlet>
  `
})
export class RootComponent {
  defaultPath:string = '';
  articlePath:string = 'article';
} 
