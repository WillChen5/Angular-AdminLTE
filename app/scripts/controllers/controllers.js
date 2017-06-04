define([
    'angular',
    'controllers/homeController',
    'controllers/calendarController'
], function(angular){
    var module = angular.module('hackathonApp.controllers', []);
    angular.forEach(arguments, function(component){
        if (angular.isFunction(component)) {
            component(module);
        }
    })
});
