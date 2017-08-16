'use strict';

angular.module('bjarnigApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('processes', {
        url: '/processes',
        templateUrl: 'app/info/processes/processes.html',
        controller: 'ProcessesCtrl'
      });
  });