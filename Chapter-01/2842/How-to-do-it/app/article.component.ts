export const ng1Article = {
  template: `
    <h1>{{article.title}}</h1>
    <p>{{article.author}}</p>
  `,
  controller: (ArticleService, $scope) => {
    $scope.article = ArticleService.article;
  }
};