import {Component, ChangeDetectionStrategy }
  from '@angular/core';
import {AddRandomPipe} from './add-random.pipe';

@Component({
  selector: 'app-root',
  template: `
    <input #t>
    <button (click)="update(t.value)">Save</button>
    <h1>{{ title | addRandomPipe }}</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title:string = '';
  update(newTitle:string) {
    this.title = newTitle;
  }
}