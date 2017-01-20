import {Component} from '@angular/core';

@Component({
  selector: 'root',
  template: `
    <h1>Root component</h1>
    <a [routerLink]="['']">Default</a>
    <a [routerLink]="['article']">Article</a>
    <router-outlet></router-outlet>
  `
})
export class RootComponent {} 
