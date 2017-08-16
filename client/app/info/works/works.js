'use strict';

angular.module('bjarnigApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('works', {
        url: '/works',
        templateUrl: 'app/info/works/works.html',
        controller: 'AboutCtrl'
      });
  });