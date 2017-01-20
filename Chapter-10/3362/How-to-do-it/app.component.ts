import {Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>Progress: {{progress}}%</h3>
    <button (click)="runInsideAngularZone()">
    Run inside Angular zone
    </button>
    <button (click)="runOutsideAngularZone()">
    Run outside Angular zone
    </button>
  `
})
export class AppComponent {
  progress: number = 0;
  startTime: number = 0;
  constructor(private zone: NgZone) {}
  runInsideAngularZone() {
    this.start();
    this.step(() => this.finish('Inside Angular zone'));
  }
  runOutsideAngularZone() {
    this.start();
    this.zone.runOutsideAngular(() => {
      this.step(() => this.finish('Outside Angular zone'));
    });
  }
  start() {
    this.progress = 0;
    this.startTime = performance.now();
  }
  finish(location:string) {
    this.zone.run(() => {
      console.log(location);
      console.log('Took ' +
        (performance.now() - this.startTime) + 'ms');
    });
  }
  step(doneCallback: () => void) {
    if (++this.progress < 100) {
      setTimeout(() => {
        this.step(doneCallback);
      }, 10);
    } else {
      doneCallback();
    }
  }
}