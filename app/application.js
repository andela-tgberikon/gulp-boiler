require("./js/controllers.js");
require("./js/directives.js");
require("./js/services.js");

window.Myjobas = angular.module("Myjobas", [
  'myjobas.controllers',
  'myjobas.services',
  'myjobas.directives',
  'ngAnimate', 
  'ngMaterial',
  'ui.router'
   ]);

Myjobas.run(['$rootScope', function($rootScope) {
  // set globals we want available in ng expressions
  $rootScope._ = window._;
  $rootScope.moment = window.moment;
}]);

Myjobas.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'pages/home.html',
      controller: 'HomeController',
      data: {
        access: 'public'
      }
    })
     .state('settings', {
      url: '/settings',
      templateUrl: 'pages/settings.html',
      controller: 'SettingsController',
      data: {
        access: 'private'
      }
    });
}]);


window.escapeEmailAddress = function(email) {
  if (!email) {
    return false;
  }

  // Replace '.' (not allowed in a Firebase key) with ',' (not allowed in an email address)
  email = email.toLowerCase();
  email = email.replace(/\./g, ',');
  return email;
};
