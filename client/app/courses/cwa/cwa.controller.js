'use strict';

angular.module('bjarnigApp')
  .controller('CwaCtrl', function ($scope, $http, $cookieStore, $location) {

    var code = $cookieStore.get('access');

    if (!code || code != 'composing') {
        $location.path('/courses/access');
    }
    
  });
