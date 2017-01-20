angular.module('articleApp', [])
.directive('article', function() {
  return {
    controller: function() {
      this.person = { firstName: 'Jake' };
      this.title = 'Lesotho Yacht Club Membership Booms';
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
      </attribution>
    `
  };
})
.directive('attribution', function() {
  return {
    controller: function() {},
    controllerAs: 'attributionCtrl',
    bindToController: { 
      author: '=',
      upperCaseAuthor: '&'
    },
    template: `
      <p ng-click="attributionCtrl.upperCaseAuthor()">
        Written by: {{ attributionCtrl.author }}
      </p>`
  };
});
