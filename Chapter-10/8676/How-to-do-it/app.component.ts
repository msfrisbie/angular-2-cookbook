import {Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button (click)="foo()">foo</button>`
})
export class AppComponent {
  constructor(private zone:NgZone) {
    zone.onStable.subscribe(() => console.log('stable'));
    zone.onUnstable.subscribe(() => console.log('unstable'));
  }
  foo() {
    setTimeout(() => console.log('timeout handler'), 1000);
  }
}