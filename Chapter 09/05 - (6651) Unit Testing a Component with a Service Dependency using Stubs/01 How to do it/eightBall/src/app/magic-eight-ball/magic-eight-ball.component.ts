import {Component} from '@angular/core';
import {MagicEightBallService} from 
  '../magic-eight-ball.service';

@Component({
  selector: 'app-magic-eight-ball',
  template: `
    <button (click)="update()">Click me!</button>
    <h1>{{ result }}</h1>
  `
})
export class MagicEightBallComponent {
  result: string = '';

  constructor(private magicEightBallService_: MagicEightBallService) {}

  update() {
    this.result = this.magicEightBallService_.reveal();
  }
}

