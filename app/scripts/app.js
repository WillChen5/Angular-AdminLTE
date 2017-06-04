/*jshint unused: vars */
define([
    'angular',
    'common/directives/directives',
    'controllers/controllers'
], function (angular)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name hackathonApp
   * @description
   * # hackathonApp
   *
   * Main module of the application.
   */
  return angular
    .module('hackathonApp', ['ngSanitize','ui.router', 'angular-echarts', 'echarts-ng', 'hackathonApp.directives', 'hackathonApp.controllers'])
    .config(function ($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise('/home');
      $stateProvider
          .state('calendar', {
              url: '/calendar',
            templateUrl: 'views/calendar.html',
            controller: 'calendarController',
            controllerAs: 'calendarVM'
          })
          .state('home', {
              url: '/home',
            templateUrl: 'views/home.html',
            controller: 'homeController',
            controllerAs: 'homeVM'
          });
    })
    .config(function($echartsProvider){
        $echartsProvider.setGlobalOption({
  theme: 'macarons',
  driftPalette: true,
  title: {
    left: 'center',
    top: 'top',
    padding: [20, 10, 10, 10]
  },
  backgroundColor: 'rgba(255, 255, 255, .5)',
  legend: {
    left: 'center',
    top: 'top',
    padding: [20, 10, 10, 10]
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  }
})
    });
});
