import {Component} from '@angular/core';

@Component({
  selector: 'root',
  template: `
    <h1>app component!</h1>
    <button (click)="toggle=!toggle">Toggle</button>
    <article></article>
    <article *ngIf="toggle"></article>
  `
})
export class RootComponent {}
