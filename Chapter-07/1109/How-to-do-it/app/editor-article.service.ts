import {Injectable} from '@angular/core';
import {ArticleService} from './article.service';
import {Article, ArticleSourceInterface} 
  from './article-source.interface';

@Injectable()
export class EditorArticleService extends ArticleService 
    implements ArticleSourceInterface {
  private notes_:string = "Swing and a miss!";

  constructor() { 
    super(); 
  }

  getArticle():Article {
    // Combine objects and return the joined object
    return Object.assign(
      {}, 
      super.getArticle(), 
      { 
        notes: this.notes_ 
      });
  }
}
