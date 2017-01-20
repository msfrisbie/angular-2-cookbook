import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'root',
  template: `
    <h1>Root component</h1>
    <a [routerLink]="['']"
       routerLinkActive="active-navlink"
       [routerLinkActiveOptions]="{exact:true}">
       Default</a>
    <a [routerLink]="['article']"
       routerLinkActive="active-navlink"
       [routerLinkActiveOptions]="{exact:true}">
       Article</a>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .active-navlink {
      color: red; 
      text-transform: uppercase;
    }
  `]
})
export class RootComponent {}
