export interface ArticleSourceInterface {
  getArticle():Article
}

export interface Article {
  title:string, 
  body:string, 
  notes?:string 
}