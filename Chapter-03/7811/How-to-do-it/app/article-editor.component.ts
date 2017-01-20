import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DelayValidator} from './delay.validator';

@Component({
  selector: 'article-editor',
  template: `
    <h2>New York-Style Pizza Actually Saucy Cardboard</h2>
    <textarea [formControl]="bodyControl"
              placeholder="Article text">
    </textarea>
    <p><button (click)="saveArticle()">Save</button></p>
  `
})
export class ArticleEditorComponent {
  articleBody:string = '';
  bodyControl:FormControl = new FormControl(null, null, DelayValidator.validate);
  
  saveArticle():void {
    if (this.bodyControl.valid) {
      alert('Valid!');
    } else {
      alert('Invalid!');
    }
  }
}
