import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'root',
  template: `
    <h1>Root component</h1>
    <button (click)="visitDefault()">Default</button>
    <button (click)="visitArticle()">Article</button>
    <router-outlet></router-outlet>
  `
})
export class RootComponent {
  constructor(private router:Router) {}

  visitDefault():void {
    this.router.navigate(['']);
  }
  visitArticle():void {
    this.router.navigate(['article']);
  }
} 
