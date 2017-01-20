angular.module('articleApp', [])
.directive('header', function() {
	return {
  	controller: function() {
      this.currentDate = new Date();
    },
    controllerAs: 'header',
    template: `
      <strong>
        Angular Chronicle - {{ header.currentDate | date }}
      </strong>
      <hr />`
  };
})
.directive('article', function() {
	return {
  	controller: function() {
      this.title = 'Food Fight Erupts During Diplomatic Luncheon';
      this.author = 'Jake';
    },
    controllerAs: 'article',
    template: `    
      <h1>{{ article.title }}</h1>
      <p>Written by: {{ article.author }}</p>`
  };
});
