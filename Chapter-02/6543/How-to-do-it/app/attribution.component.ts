import {Component, Input} from '@angular/core';

@Component({
  selector: 'attribution',
  template: `
    <h3>Written by: {{author}} </h3>
  `
})
export class AttributionComponent { 
  @Input() author:string;
}
