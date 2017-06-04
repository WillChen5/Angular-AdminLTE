require.config({
  paths: {
    'jquery': '../../bower_components/jquery/dist/jquery',
    'jqueryUI': '../../bower_components/jQueryUI/jquery-ui',
    'angular': '../../bower_components/angular/angular',
    'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
    'uiRouter': '../../bower_components/angular-ui-router/release/angular-ui-router',
    'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
    'bootstrap': '../../bower_components/bootstrap/dist/js/bootstrap',
    'adminLTE': '../../bower_components/Angular-AdminLTE/js/app',
    // 'echarts': '../../bower_components/echarts/dist/echarts',
    'echarts-ng': '../../bower_components/echarts-ng/dist/echarts-ng',
    'angular-echarts': '../../bower_components/angular-echarts/dist/angular-echarts'
  },
  shim: {
    jquery: {
      exports: 'jquery'
    },
    jqueryUI: {
      deps: [
        'jquery'
      ],
      exports: 'jqueryUI'
    },
    // 'echarts': {
    //     exports: 'echarts'
    // },
    'angular': {
      exports: 'angular',
      deps: [
        'jquery'
      ]
    },
    'echarts-ng': [
        'angular',
        // 'echarts'
     ],
     'angular-echarts': [
        'angular',
        // 'echarts'
     ],
    'uiRouter': [
      'angular'
    ],
    'angular-sanitize': [
      'angular'
    ],
    bootstrap: {
      deps: [
        'jqueryUI'
      ],
      exports: 'bootstrap'
    },
    adminLTE: {
      deps: [
        'jquery',
        'bootstrap'
      ],
      exports: 'adminLTE'
    }
  },
  deps: ['main']
});
