'use strict';

angular.module('bjarnigApp')
  .controller('PmaCtrl', function ($scope, $http, $cookieStore, $location) {

    var code = $cookieStore.get('access');

    if (!code || code != 'programming') {
        $location.path('/courses/access');
    }
    
  });
