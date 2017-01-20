import { Injectable } from '@angular/core';

@Injectable()
export class MagicEightBallService {
  private values: Array<string>;
  private lastIndex: number;

  constructor() {
    this.values = [
      'Ask again later',
      'Outlook good',
      'Most likely',
      'Don\'t count on it'
    ];

    this.lastIndex = this.getIndex();
  }

  private getIndex(): number {
    return Math.floor(Math.random() * this.values.length);
  }

  reveal(): string {
    let newIdx = this.getIndex();
    if (newIdx === this.lastIndex) {
      newIdx = (++newIdx)%this.values.length;
    }
    this.lastIndex = newIdx;

    return this.values[newIdx];
  }
}
