import {Component} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'root',
  template: `
  	<button (click)="shareSubject.next($event)">Share!</button>
  	<article [shares]="shareEmitter"></article>
  `
})
export class RootComponent  {
  shareSubject:Subject<Event> = new Subject();
  shareEmitter:Observable<Event> = this.shareSubject.asObservable();
}
