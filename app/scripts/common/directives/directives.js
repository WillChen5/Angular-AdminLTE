define([
    'angular',
    'common/directives/adminlteAppDirective',
    'common/directives/myMapChartDirective'
], function(angular){
    var module = angular.module('hackathonApp.directives', []);
    angular.forEach(arguments, function(component){
        if (angular.isFunction(component)) {
            component(module);
        }
    })
});
