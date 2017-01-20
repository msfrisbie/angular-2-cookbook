import {Component} from '@angular/core';

@Component({
  selector: 'logo',
  template: '<img [src]="logoUrl">'
})
export class LogoComponent {
  logoUrl:string =
    '//angular.io/resources/images/logos/standard/logo-nav.png';
}
