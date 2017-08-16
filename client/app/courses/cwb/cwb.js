'use strict';

angular.module('bjarnigApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cwb', {
        url: '/courses/cwb',
        templateUrl: 'app/courses/cwb/cwb.html',
        controller: 'CwbCtrl'
      });
  });