'use strict';

angular.module('bjarnigApp')
  .factory('Course', function($resource) {
    return $resource('/api/courses/:id/:controller', {
      id: '@_id'
    }, {
      get: {
        method: 'GET',
        params: {
          id: 'me'
        }
      }
    });
  });