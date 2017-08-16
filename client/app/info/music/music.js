'use strict';

angular.module('bjarnigApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('music', {
        url: '/music',
        templateUrl: 'app/info/music/music.html',
        controller: 'MusicCtrl'
      });
      $stateProvider
      .state('pieces', {
        url: '/pieces',
        templateUrl: 'app/info/music/music.html',
        controller: 'MusicCtrl'
      });
      $stateProvider
      .state('live', {
        url: '/live',
        templateUrl: 'app/info/music/live.html',
        controller: 'MusicCtrl'
      });
      $stateProvider
      .state('collaborations', {
        url: '/collaborations',
        templateUrl: 'app/info/music/collaborations.html',
        controller: 'MusicCtrl'
      });
       $stateProvider
      .state('visual', {
        url: '/visual',
        templateUrl: 'app/info/music/visual.html',
        controller: 'MusicCtrl'
      });
      $stateProvider
      .state('mixes', {
        url: '/mixes',
        templateUrl: 'app/info/music/mixes.html',
        controller: 'MusicCtrl'
      });
      $stateProvider
      .state('excerpts', {
        url: '/excerpts',
        templateUrl: 'app/info/music/excerpts.html',
        controller: 'MusicCtrl'
      });
  });