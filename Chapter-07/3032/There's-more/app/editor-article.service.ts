import {Injectable} from '@angular/core';

export const MockEditorArticleService = {
  getArticle: () => ({ 
    title: "Mock title",
    body: "Mock body"
  })
};

@Injectable()
export class EditorArticleService {
  private title_:string = 
    "Prominent Vegan Embroiled in Scrambled Eggs Scandal";
  private body_:string = 
    "Tofu Farming Alliance retracted their endorsement.";

  getArticle() {
    return {
      title: this.title_,
      body: this.body_
    };
  }
}
