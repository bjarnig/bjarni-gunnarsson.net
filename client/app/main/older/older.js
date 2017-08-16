'use strict';

angular.module('bjarnigApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('older', {
        url: '/older',
        templateUrl: 'app/main/older/older.html',
        controller: 'MainCtrl'
      });
  });