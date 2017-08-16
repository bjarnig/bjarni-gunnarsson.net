'use strict';

angular.module('bjarnigApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('paths', {
        url: '/paths',
        templateUrl: 'app/info/paths/paths.html',
        controller: 'PathsCtrl'
      });
  });