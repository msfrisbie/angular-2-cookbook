import {ArticleService} from './article.service';

export function articleFactory(enableEditor?:boolean):ArticleService {
  return (articleService:ArticleService) => {
    if (enableEditor) {
      articleService.enableEditor();
    }
    return articleService;
  }
}
