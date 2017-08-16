'use strict';

angular.module('bjarnigApp')
  .controller('CwbCtrl', function ($scope, $http, $cookieStore, $location) {

   var code = $cookieStore.get('access');

    if (!code || code != 'algorithmsX') {
        $location.path('/courses/access');
    }
    
  });
