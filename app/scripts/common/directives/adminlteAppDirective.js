define(function(){
    'use strict';

    return function(module){
        module.directive('adminlteApp', function(){
            return {
                templateUrl: 'scripts/common/views/app.html',
                link: function(){
                    console.log('*********');
                }
            };
        });
    }
})
