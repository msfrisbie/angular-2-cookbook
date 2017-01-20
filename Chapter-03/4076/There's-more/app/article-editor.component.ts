import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'article-editor',
  template: `
    <p>Article title (required):</p>
    <input [formControl]="titleControl">
    <button (click)="submitTitle()">Save</button>
    <h1>{{title}}</h1>

  `
})
export class ArticleEditorComponent  {
  title:string;
  titleControl:FormControl = 
    new FormControl(null, Validators.required);

  submitTitle():void {
    if(this.titleControl.valid) {
      this.title = this.titleControl.value;
    } else {
      alert("Title required");
    }
  }
}
