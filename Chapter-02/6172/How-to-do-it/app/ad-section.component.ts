import {Component} from '@angular/core';

@Component({
  selector: 'ad-section',
  template: `
    <a href="#">{{adText}}</a>
    <ng-content select="p"></ng-content>
  `
})
export class AdSectionComponent {
  adText:string = 'Selfie sticks 40% off!';
}
