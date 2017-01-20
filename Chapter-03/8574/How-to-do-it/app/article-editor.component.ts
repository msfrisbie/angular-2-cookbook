import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'article-editor',
  template: `
    <h2>Psych Study on Humility Wins Major Award</h2>
    <textarea [formControl]="bodyControl"
              placeholder="Article text"></textarea>
    <p><button (click)="saveArticle()">Save</button></p>
  `
})
export class ArticleEditorComponent {
  articleBody:string = '';
  bodyControl:FormControl = new FormControl(null, 
    [Validators.required, this.wordCtValidator]);

  wordCtValidator(c:FormControl):{[key: string]: any} {
    let wordCt:number = ((c.value || '').match(/\S+/g) || []).length;
    return wordCt <= 10 ? 
      null :
      {maxwords: {limit:10, actual:wordCt}};
  }

  saveArticle():void {
    console.log(this.bodyControl)
    if (this.bodyControl.valid) {
      alert('Valid!');
    } else {
      alert('Invalid!');
    }
  }
}

