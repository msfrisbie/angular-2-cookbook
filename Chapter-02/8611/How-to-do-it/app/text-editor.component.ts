import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'text-editor',
  template: `
    <textarea (keyup)="emitWordCount($event)"></textarea>
  `
})
export class TextEditorComponent {  
  @Output() countUpdate = new EventEmitter<number>();
  
  emitWordCount(e:Event) {
    this.countUpdate.emit(
      (e.target.value.match(/\S+/g) || []).length);
  }
} 

