import {Component, ViewChild, ngAfterViewInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'click-observer',
  template: `
  	<button #btn>
  	  Emit event!
  	</button>
  	<p *ngFor="let click of clicks; let i = index">
  	  {{i}}: {{click}}
  	</p>
  `
})
export class ClickObserverComponent implements AfterViewInit {
  @ViewChild('btn') btn;
  clickEmitter:Observable<Event>;
  clicks:Array<Event> = [];

  ngAfterViewInit() {
    this.clickEmitter = Observable.fromEvent(
        this.btn.nativeElement, 'click');
  	this.clickEmitter.subscribe(clickEvent => 
        this.clicks.push(clickEvent));
  }
}
