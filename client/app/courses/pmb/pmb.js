'use strict';

angular.module('bjarnigApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pmb', {
        url: '/courses/pmb',
        templateUrl: 'app/courses/pmb/pmb.html',
        controller: 'PmbCtrl'
      });
  });