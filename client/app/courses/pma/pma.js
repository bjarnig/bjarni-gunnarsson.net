'use strict';

angular.module('bjarnigApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pma', {
        url: '/courses/pma',
        templateUrl: 'app/courses/pma/pma.html',
        controller: 'PmaCtrl'
      });
  });