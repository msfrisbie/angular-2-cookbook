import {Component} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'click-observer',
  template: `
  	<button (click)="clickEmitter.next($event)">
  	  Emit event!
  	</button>
  	<p *ngFor="let click of clicks; let i = index">
  	  {{i}}: {{click}}
  	</p>
  `
})
export class ClickObserverComponent {
  clickEmitter:Subject<Event> = new Subject();
  clicks:Array<Event> = [];

  constructor() {
  	this.clickEmitter
     .subscribe(clickEvent => this.clicks.push(clickEvent));
  }
}
