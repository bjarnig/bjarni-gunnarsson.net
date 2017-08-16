'use strict';

angular.module('bjarnigApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('st', {
        url: '/courses/st',
        templateUrl: 'app/courses/st/st.html',
        controller: 'StCtrl'
      });
  });