'use strict';

angular.module('bjarnigApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('courses', {
        url: '/courses',
        templateUrl: 'app/courses/courses.html',
        controller: 'CoursesCtrl'
      });
  });