'use strict';

angular.module('bjarnigApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('oldest', {
        url: '/oldest',
        templateUrl: 'app/main/oldest/oldest.html',
        controller: 'MainCtrl'
      });
  });