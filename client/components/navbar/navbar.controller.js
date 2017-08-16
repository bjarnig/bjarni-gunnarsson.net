'use strict';

angular.module('bjarnigApp')
  .controller('NavbarCtrl', function($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(routes) {

      if (routes && routes.length) {
        var arrayLength = routes.length;
        for (var i = 0; i < arrayLength; i++) {
          if (routes[i] === $location.path()) {
            return true;
          }
        }
      }

      return false;
    };
  });