import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} 
  from '@angular/forms';

@Component({
  selector: 'article-editor',
  template: `
    <p>Title: <input [formControl]="titleControl"></p>
    <p>Text: <input [formControl]="textControl"></p>
    <p><button (click)="saveArticle()">Save</button></p>
    <hr />
    <p>Preview:</p>
    <div style="border:1px solid #999;margin:50px;">
      <h1>{{article.title}}</h1>
      <p>{{article.text}}</p>
    </div>
  `
})
export class ArticleEditorComponent {
  article:{title:string, text:string} = {};
  titleControl:FormControl = new FormControl(null, Validators.required);
  textControl:FormControl = new FormControl(null, Validators.required);
  articleFormGroup:FormGroup = new FormGroup({
    title: this.titleControl,
    text: this.textControl
  });

  saveArticle() {
    if (this.articleFormGroup.valid) {
      this.article = this.articleFormGroup.value;
    } else {
      console.log('Missing field(s)!');
    }
  }
}
