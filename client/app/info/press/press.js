'use strict';

angular.module('bjarnigApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('press', {
        url: '/press',
        templateUrl: 'app/info/press/press.html',
        controller: 'PressCtrl'
      });
  });