'use strict';

let app = angular.module('socialLogin', ['satellizer', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', { url: '/', templateUrl: 'partials/home.html'})
    .state('login', { url: '/login', templateUrl: 'partials/login.html', controller: 'loginCtrl'})

    $authProvider.github({
      clientId: '38f910775b611cbd28de'
    });
});
