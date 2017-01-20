import {Component} from '@angular/core';

@Component({
  selector: 'root',
  template: `
    <node subscribeChannel="foo" 
          publishChannel="bar">
    </node>
    <node subscribeChannel="bar" 
          publishChannel="foo">
    </node>
  `
})
export class RootComponent {}