import {Injectable} from '@angular/core';
import {Article, ArticleSourceInterface} from './article-source.interface';

@Injectable()
export class ArticleService implements ArticleSourceInterface {
  private title_:string = 
    "Researchers Determine Ham Sandwich Not Turing Complete";
  private body_:string = 
    "Computer science community remains skeptical";

  constructor() {
    console.log('Instantiated ArticleService!');
  }

  getArticle():Article {
    return {
      title: this.title_,
      body: this.body_
    };
  }
}
