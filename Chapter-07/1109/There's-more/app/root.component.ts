import {Component} from '@angular/core';

@Component({
  selector: 'root',
  template: `
    <default-view>
      <article></article>
    </default-view>
    <editor-view>
      <article></article>
    </editor-view>
    <default-view>
      <article></article>
    </default-view>
    <editor-view>
      <article></article>
    </editor-view>
  `
})
export class RootComponent {}
