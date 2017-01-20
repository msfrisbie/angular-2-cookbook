import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'click-observer',
  template: `
  	<button (click)="publish($event)">
  	  Emit event!
  	</button>
  	<p *ngFor="let click of clicks; let i = index">
  	  {{i}}: {{click}}
  	</p>
  `
})
export class ClickObserverComponent {
  clickEmitter: Observable<Event>;
  private clickSubject_: Subject<Event> = new Subject();
  clicks:Array<Event> = [];

  constructor() {
  	this.clickEmitter = this.clickSubject_.asObservable();
  	this.clickEmitter.subscribe(clickEvent => 
     this.clicks.push(clickEvent));
  }

  publish(e:Event):void {
  	this.clickSubject_.next(e);
  }
}
