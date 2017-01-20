angular.module('articleApp', [])
.component('article', {
  controller: function() {
    this.person = { firstName: 'Jake' };
    this.title = ' Police Bust Illegal Snail Racing Ring ';
    this.capitalize = function() {
      this.person.firstName =  
        this.person.firstName.toUpperCase();
    };
  },
  controllerAs: 'articleCtrl',
  template: `
    <h1>{{ articleCtrl.title }}</h1>
    <attribution author="articleCtrl.person.firstName"
                 upper-case-author="articleCtrl.capitalize()">
  	</attribution>`
})
.component('attribution', {
  controller: function() {},
  controllerAs: 'attributionCtrl',
  bindings: { 
    author: '=',
    upperCaseAuthor: '&'
  },
  template: `
    <p ng-click="attributionCtrl.upperCaseAuthor()">
      Written by: {{ attributionCtrl.author }}
    </p>
  `
});

