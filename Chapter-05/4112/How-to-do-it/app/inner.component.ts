import {Component, Input} from '@angular/core';

@Component({
  selector: 'inner',
  template: `<p>{{val}}`
})
export class InnerComponent {
  @Input() val:number;
}
