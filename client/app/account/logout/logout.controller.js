'use strict';

angular.module('bjarnigApp')
  .controller('LogoutCtrl', function($scope, Auth, $location) {

    Auth.logout();
    
    $location.path('/');

  });