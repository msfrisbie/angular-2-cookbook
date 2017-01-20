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
  template: `
    <h1>{{ $ctrl.title }}</h1>
    <attribution author="$ctrl.person.firstName"
                 upper-case-author="$ctrl.capitalize()">
  	</attribution>`
})
.component('attribution', {
  controller: function() {},
  bindings: { 
    author: '=',
    upperCaseAuthor: '&'
  },
  template: `
    <p ng-click="$ctrl.upperCaseAuthor()">
      Written by: {{ $ctrl.author }}
    </p>
  `
});
