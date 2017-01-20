import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'article-editor',
  template: `
    <form #f="ngForm"
          (ngSubmit)="saveArticle(f)">
      <div ngModelGroup="article">
        <p><input ngModel
                  name="title"
                  placeholder="Article title"></p>
        <p><textarea ngModel 
                     name="text"
                     placeholder="Article text"></textarea></p>
      </div>
      <p><button type="submit">Save</button></p>
    </form>
  `
})
export class ArticleEditorComponent {
  saveArticle(f:NgForm):void {
    console.log(f);
  }
}
