'use strict';

angular.module('bjarnigApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('access', {
        url: '/courses/access',
        templateUrl: 'app/courses/access/access.html',
        controller: 'AccessCtrl'
      });
  });