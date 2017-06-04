define(function(){
    'use strict';

    return function(module){
        module.controller('homeController', ['$scope', '$timeout', '$interval', function($scope,$timeout, $interval){
            var vm = this;

            var pageload = {
                   name: 'page.load',
                   datapoints: [
                       { x: 2001, y: 1012 },
                       { x: 2002, y: 1023 },
                       { x: 2003, y: 1045 },
                       { x: 2004, y: 1062 },
                       { x: 2005, y: 1032 },
                       { x: 2006, y: 1040 },
                       { x: 2007, y: 1023 },
                       { x: 2008, y: 1090 },
                       { x: 2009, y: 1012 },
                       { x: 2010, y: 1012 }
                   ]
               };

               var firstPaint = {
                   name: 'page.firstPaint',
                   datapoints: [
                       { x: 2001, y: 22 },
                       { x: 2002, y: 13 },
                       { x: 2003, y: 35 },
                       { x: 2004, y: 52 },
                       { x: 2005, y: 32 },
                       { x: 2006, y: 40 },
                       { x: 2007, y: 63 },
                       { x: 2008, y: 80 },
                       { x: 2009, y: 20 },
                       { x: 2010, y: 25 }
                   ]
               };

            vm.config = {
                // title: 'Line Chart',
                // subtitle: 'Line Chart Subtitle',
                debug: true,
                showXAxis: true,
                showYAxis: true,
                showLegend: true,
                stack: false
            };

            vm.data = [ pageload ];
            vm.multiple = [pageload, firstPaint ];

            // CAUTION: 这行必须放在这里，不然 angular 感知不到数据变化
            updateData($interval);


            function updateData($interval) {
                $interval(function () {
                    pageload.datapoints.push({ x: pageload.datapoints[pageload.datapoints.length - 1].x + 1, y: Math.round(Math.random() * 2000) });
                    firstPaint.datapoints.push({ x: firstPaint.datapoints[firstPaint.datapoints.length - 1].x + 1, y: Math.round(Math.random() * 100) });
                    pageload.datapoints.shift();
                    firstPaint.datapoints.shift();
                }, 3000);
            }
        }]);
    }
})
