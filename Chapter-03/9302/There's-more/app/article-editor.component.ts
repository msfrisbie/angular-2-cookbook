import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'article-editor',
  template: `
    <form [formGroup]="articleGroup"
          (ngSubmit)="saveArticle()">
      <p><input [formControl]="titleControl" 
                placeholder="Article title"></p>
      <p><textarea [formControl]="textControl"
                   placeholder="Article text"></textarea></p>
      <p><button type="submit">Save</button></p>
    </form>
  `
})
export class ArticleEditorComponent {
  titleControl:FormControl = new FormControl(null, Validators.required);
  textControl:FormControl = new FormControl(null, Validators.required);
  articleGroup:FormGroup;
  
  constructor(@Inject(FormBuilder) formBuilder:FormBuilder) {
    this.articleGroup = formBuilder.group({
      article: formBuilder.group({
        title: this.titleControl,
        text: this.textControl
      })
    });
  }
  saveArticle():void {
    console.log(this.articleGroup);
  }
}
