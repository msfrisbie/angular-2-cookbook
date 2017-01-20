import {Injectable} from '@angular/core';

@Injectable()
export class ArticleService {
  private title_:string = 
    "Flying Spaghetti Monster Sighted";
  private body_:string = 
    "Adherents insist we are still missing the point";
  private notes_:string = "Spot on!";
  private editorEnabled_:boolean = false;

  getArticle():Object {
    var article = {
      title: this.title_,
      body: this.body_
    };
    if (this.editorEnabled_) {
      Object.assign(article, article, {
        notes: this.notes_
      });
    }
    return article;
  }

  enableEditor():void {
    this.editorEnabled_ = true;
  }
}
