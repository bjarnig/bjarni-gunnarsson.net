'use strict';

angular.module('bjarnigApp')
  .controller('PmbCtrl', function ($scope, $http, $cookieStore, $location) {

    var code = $cookieStore.get('access');

    console.log('BG-DEBUG (8, pmb.controller.js)'.concat(JSON.stringify(code)));
    

    if (!code || code != 'music') {
        $location.path('/courses/access');
    }
    
  });