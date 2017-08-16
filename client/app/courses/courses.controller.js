'use strict';

angular.module('bjarnigApp')
    .controller('CoursesCtrl', function($scope, $location, $http, $cookieStore) {
        
        $scope.displayCwa = function() {            

            if ($cookieStore.get('access') === 'composing') {                           
                $location.path('/courses/cwa');
            } else {                
                $location.path('/courses/access');
            }            
        }

        $scope.displayCwb = function() {            

           if ($cookieStore.get('access') === 'algorithms') {                           
                $location.path('/courses/cwb');
            } else {                
                $location.path('/courses/access');
            }   
        }

        $scope.displayPma = function() {

           if ($cookieStore.get('access') === 'programming') {                           
                $location.path('/courses/pmb');
            } else {                
                $location.path('/courses/access');
            }   
        }

        $scope.displayPmb = function() {

           if ($cookieStore.get('access') === 'music') {                           
                $location.path('/courses/pmb');
            } else {                
                $location.path('/courses/access');
            }   
        }

        $scope.displaySt = function() {

           if ($cookieStore.get('access') === 'transform') {                           
                $location.path('/courses/st');
            } else {                
                $location.path('/courses/access');
            }   
        }

    });