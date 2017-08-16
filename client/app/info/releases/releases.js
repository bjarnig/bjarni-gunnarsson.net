'use strict';

angular.module('bjarnigApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('releases', {
        url: '/releases',
        templateUrl: 'app/info/releases/releases.html',
        controller: 'ReleasesCtrl'
      });
  });