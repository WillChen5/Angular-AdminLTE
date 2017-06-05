define(function(){
    'use strict';

    return function(module){
        module.directive('myMapChart', function(){
            return {
                restrict: 'AE',
                scope: {

                },
                link: function($scope, element, attr){
                    var myChart = echarts.init(element[0]);
                    var dom=myChart.getDom();

                    myChart=echarts.init(dom);

                    var uploadedDataURL = "http://data-visual.cn/datav/img/football.svg";

                    var geoCoordMap = {
                        'A': [0.072, 0.7],
                        'B': [0.852, 0.505],
                        'C': [0.552, 0.505],
                    };

                    var option = {
                        grid: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        },
                        xAxis: [{
                            type: 'value',
                            min: 0,
                            max: 1,
                            splitLine:{show:false}
                        }],
                        yAxis: [{
                            type: 'value',
                            min: 0,
                            max: 1,
                            splitLine:{show:false},
                            axisLine:{show:false}
                        }],
                        graphic: [{
                            id: 'football-ground',
                            type: 'image',
                            style: {
                                image: uploadedDataURL,
                                width: 757,
                                height: 570,
                                x:0,
                                y:0
                            },
                            left: 0,
                            top:0
                        }],
                        series: [{
                            name: '',
                            type: 'lines',
                            coordinateSystem: 'cartesian2d',
                            zlevel: 1,
                            effect: {
                                show: true,
                                period: 2,
                                trailLength: 0.7,
                                color: '#fff',
                                symbolSize: 3
                            },
                            lineStyle: {
                                normal: {
                                    color: '#ffa022',
                                    width: 0,
                                    curveness: 0
                                }
                            },
                            data: [{
                                coords: [
                                    [0.072, 0.7], // 起点
                                    [0.852, 0.505] // 终点
                                ]
                            },{
                                coords: [
                                    [0.852, 0.505] ,
                                    [0.552, 0.505]
                                ]
                            }]
                        }, {
                            name: '',
                            type: 'lines',
                            coordinateSystem: 'cartesian2d',
                            zlevel: 2,
                            effect: {
                                show: true,
                                period: 6,
                                trailLength: 0,
                                //symbol: 'path://',
                                symbolSize: 1
                            },
                            lineStyle: {
                                normal: {
                                    color: '#ffa022',
                                    width: 2,
                                    opacity: 0.9,
                                    curveness: 0,
                                    type :'dashed'
                                }
                            },
                            data: [{
                                coords: [
                                    [0.072, 0.7], // 起点
                                    [0.852, 0.505] // 终点
                                ]
                            }]
                        }, {
                            name: '',
                            type: 'effectScatter',
                            coordinateSystem: 'cartesian2d',
                            data: [
                                [0.501, 0.501, 50]
                            ],
                            symbolSize: 50,
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: false,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#f4e925',
                                    shadowBlur: 10,
                                    shadowColor: '#333'
                                }
                            },
                            zlevel: 3
                        }]
                    };
                    if (option && typeof option === "object") {
                        myChart.setOption(option, true);
                    }
                }
            };
        });
    }
})
