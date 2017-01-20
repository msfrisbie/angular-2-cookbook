import {Injectable} from '@angular/core';

@Injectable()
export class ArticleService {
  private title_:string = `
    CFO Yodels Quarterly Earnings Call, Stock Skyrockets
  `;
  getTitle() {
    return this.title_;
  }
}
