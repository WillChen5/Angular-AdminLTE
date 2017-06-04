require([
    'angular',
    'app',
    'uiRouter',
    'angular-sanitize',
    'adminLTE',
    'jquery',
    'jqueryUI',
    'bootstrap',
    // 'echarts',
    'echarts-ng',
    'angular-echarts'
], function(angular, app) {
  'use strict';
  /* jshint ignore:start */
  // var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element(document).ready(function() {
    angular.bootstrap(document, [app.name]);
  });
});
