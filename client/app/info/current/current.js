'use strict';

angular.module('bjarnigApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('current', {
        url: '/current',
        templateUrl: 'app/info/current/current.html',
        controller: 'CurrentCtrl'
      });
  });