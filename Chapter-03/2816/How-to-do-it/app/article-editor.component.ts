import {Component} from '@angular/core';
import {FormControl, FormArray, Validators} 
  from '@angular/forms';

@Component({
  selector: 'article-editor',
  template: `
    <p>Tags:</p>
    <ul>
      <li *ngFor="let t of tagControls; let i = index">
        <input [formControl]="t">
      </li>
    </ul>
    <p><button (click)="addTag()">+</button></p>
    <p><button (click)="saveArticle()">Save</button></p>
  `
})
export class ArticleEditorComponent {
  tagControls:Array<FormControl> = [];
  tagFormArray:FormArray = new FormArray(this.tagControls);
  
  addTag():void {
    this.tagFormArray.push(new FormControl(null, Validators.required));
  }
  saveArticle():void {
    if (this.tagFormArray.valid) {
      alert('Valid!');
    } else {
      alert('Missing field(s)!');
    }
  }
}
