'use strict';

angular.module('bjarnigApp')
  .controller('StCtrl', function ($scope, $http, $cookieStore, $location) {

    var code = $cookieStore.get('access');

    if (!code || code != 'transform') {
        $location.path('/courses/access');
    }
    
  });
