import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'article-editor',
  template: `
    <h2>Psych Study on Humility Wins Major Award</h2>
    <textarea [formControl]="bodyControl"
              required
              max-word-count="10"
              placeholder="Article text"></textarea>
    <p><button (click)="saveArticle()">Save</button></p>
  `
})
export class ArticleEditorComponent {
  articleBody:string = '';
  bodyControl:FormControl = new FormControl();

  saveArticle():void {
    if (this.bodyControl.valid) {
      alert('Valid!');
    } else {
      alert('Invalid!');
    }
  }
}

