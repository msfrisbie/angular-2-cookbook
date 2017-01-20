angular.module('articleApp', [])
.service('ArticleData', function() {
	var title = 'Incumbent Senator Ousted by Stalk of Broccoli';
	this.getTitle = function() {
  	return title;
  };
  this.author = 'Jake';
})
.component('article', {
  controller: function(ArticleData) {
    this.title = ArticleData.getTitle();
    this.author = ArticleData.author;
  },
  template: `
    <h1>{{ $ctrl.title }}</h1>
    <p>Written by: {{ $ctrl.author }}</p>
  `
});
