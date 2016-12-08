import {Injectable} from '@angular/core';

@Injectable()
export class MagicEightBallService {
  private values:Array<string>;
  private lastIndex:number;

  constructor() {
    // Initialize the values array
    // Must have at least two entries
    this.values = [
      'Ask again later',
      'Outlook good',
      'Most likely',
      'Don\'t count on it'
    ];

    // Initialize with any valid index
    this.lastIndex = this.getIndex();
  }

  private getIndex():number {
    // Return a random index for this.values
    return Math.floor(Math.random() * this.values.length);
  }

  reveal():string {
    // Generate a new index
    let newIdx = this.getIndex();
.
    // Check if the index was the same one used last time
    if (newIdx === this.lastIndex) {
      // If so, shift up one (wrapping around) in the array
      // This is still random behavior
      newIdx = (++newIdx) % this.values.length;
    }
    
    // Save the index that you are now using
    this.lastIndex = newIdx;

    // Access the string and return it
    return this.values[newIdx];
  }
}
