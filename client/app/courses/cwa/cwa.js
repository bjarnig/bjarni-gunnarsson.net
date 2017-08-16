'use strict';

angular.module('bjarnigApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cwa', {
        url: '/courses/cwa',
        templateUrl: 'app/courses/cwa/cwa.html',
        controller: 'CwaCtrl'
      });
  });