import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'article-editor',
  template: `
    <form [formGroup]="articleGroup"
          (ngSubmit)="saveArticle()">
      <div formGroupName="article">
        <p><input formControlName="title" 
                  placeholder="Article title"></p>
        <p><textarea formControlName="text"
                     placeholder="Article text"></textarea></p>
      </div>
      <p><button type="submit">Save</button></p>
    </form>
  `
})
export class ArticleEditorComponent {
  articleGroup:FormGroup;
  
  constructor(@Inject(FormBuilder) formBuilder:FormBuilder) {
    this.articleGroup = formBuilder.group({
      article: formBuilder.group({
        title: [null, Validators.required],
        text: [null, Validators.required]
      })
    });
  }
  saveArticle():void {
    console.log(this.articleGroup);
  }
}
