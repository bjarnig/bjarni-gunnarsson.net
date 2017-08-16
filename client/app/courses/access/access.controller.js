'use strict';

angular.module('bjarnigApp')
  .controller('AccessCtrl', function($scope, $location, $cookieStore) {

    $scope.access = function(form) {
      $scope.submitted = true;

      console.log($scope.accessCode);

      if ($scope.accessCode == 'composingx') {
        $cookieStore.put('access', 'composing');
        $location.path('/courses/cwa');
      } else if ($scope.accessCode == 'algorithmsx') {
        $cookieStore.put('access', 'algorithms');
        $location.path('/courses/cwb');
      } else if ($scope.accessCode == 'programmingx') {
        $cookieStore.put('access', 'programming');
        $location.path('/courses/pma');
      } else if ($scope.accessCode == 'musicx') {
        console.log('BG-DEBUG (21, access.controller.js)');        
        $cookieStore.put('access', 'music');
        $location.path('/courses/pmb');
      } else if ($scope.accessCode == 'transformx') {
        console.log('BG-DEBUG (25, access.controller.js)');        
        $cookieStore.put('access', 'transform');
        $location.path('/courses/st');
      }

    };
  });