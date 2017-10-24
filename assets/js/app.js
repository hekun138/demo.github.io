$(function() {

        var $fullText = $('.admin-fullText');
        $('#admin-fullscreen').on('click', function() {
            $.AMUI.fullscreen.toggle();
        });

        $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
            $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
        });

        $('.tpl-switch').find('.tpl-switch-btn-view').on('click', function() {
            $(this).prev('.tpl-switch-btn').prop("checked", function() {
                    if ($(this).is(':checked')) {
                        return false
                    } else {
                        return true
                    }
                })
                // console.log('123123123')
          });
		$('.btn-loading-example').click(function(){
			var $btn = $(this);
			$btn.button('loading');
			setTimeout(function(){
				$btn.button('reset');
			},5000);
		});
            $('#type-main-content').highcharts({
                   chart: {
                        type: 'column'
                    },
                    title: {
                        text: '月平均降雨量'
                    },
                    subtitle: {
                        text: '数据来源: xxxxxx'
                    },
                    xAxis: {
                        categories: [
                            '一月',
                            '二月',
                            '三月',
                            '四月',
                            '五月',
                            '六月',
                            '七月',
                            '八月',
                            '九月',
                            '十月',
                            '十一月',
                            '十二月'
                        ],
                        crosshair: true
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '降雨量 (mm)'
                        }
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    plotOptions: {
                        column: {
                            pointPadding: 0.2,
                            borderWidth: 0
                        }
                    },
                    series: [{
                        name: '东京',
                        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                    }, {
                        name: '纽约',
                        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
                    }, {
                        name: '伦敦',
                        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
                    }, {
                        name: '柏林',
                        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
                    }]
                });
            //折线温度图
             $.getJSON('https://data.jianshukeji.com/jsonp?filename=json/large-dataset.json&callback=?', function (data) {
                    // Create a timer
                    var start = +new Date();
                    // Create the chart
                    $('#basic-main-content').highcharts('StockChart', {
                        chart: {
                            events: {
                                load: function () {
                                    if (!window.isComparing) {
                                        this.setTitle(null, {
                                            text: 'Built chart in ' + (new Date() - start) + 'ms'
                                        });
                                    }
                                }
                            },
                            zoomType: 'x'
                        },
                        rangeSelector: {
                            buttons: [{
                                type: 'day',
                                count: 3,
                                text: '3d'
                            }, {
                                type: 'week',
                                count: 1,
                                text: '1w'
                            }, {
                                type: 'month',
                                count: 1,
                                text: '1m'
                            }, {
                                type: 'month',
                                count: 6,
                                text: '6m'
                            }, {
                                type: 'year',
                                count: 1,
                                text: '1y'
                            }, {
                                type: 'all',
                                text: 'All'
                            }],
                            selected: 3
                        },
                        yAxis: {
                            title: {
                                text: 'Temperature (°C)'
                            }
                        },
                        title: {
                            text: 'Hourly temperatures in Vik i Sogn, Norway, 2004-2010'
                        },
                        subtitle: {
                            text: 'Built chart in ...' // dummy text to reserve space for dynamic subtitle
                        },
                        series: [{
                            name: 'Temperature',
                            data: data.data,
                            pointStart: Date.UTC(2004, 3, 1),
                            pointInterval: 3600 * 1000,
                            tooltip: {
                                valueDecimals: 1,
                                valueSuffix: '°C'
                            }
                        }]
                    });
                });
             //饼图
                      // Radialize the colors
            Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
                return {
                    radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
                    stops: [
                        [0, color],
                        [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
                    ]
                };
            });
            // 构建图表
            $('#statistics').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: '2014年某网站各浏览器的访问量占比'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            },
                            connectorColor: 'silver'
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: '浏览器占比',
                    data: [
                        ['Firefox',   45.0],
                        ['IE',       26.8],
                        {
                            name: 'Chrome',
                            y: 12.8,
                            sliced: true,
                            selected: true
                        },
                        ['Safari',    8.5],
                        ['Opera',     6.2],
                        ['其他',   0.7]
                    ]
                }]
            });
            //负值柱状图
             $('#combo-main-content').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '包含负值的柱形图'
                    },
                    xAxis: {
                        categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: '小张',
                        data: [5, 3, 4, 7, 2]
                    }, {
                        name: '小彭',
                        data: [2, -2, -3, 2, 1]
                    }, {
                        name: '小潘',
                        data: [3, 4, 4, -2, 5]
                    },{
                        name:'小何',
                        data:[2,5,8,-9,5,3]
                    },{
                        name:'小许',
                        data:[1,-3,-5,5,6]
                    },{
                        name:'小刘',
                        data:[12,8,-3,-6,9,2]
                    },{
                        name:'小韩',
                        data:[18,-4,-7,8,6]
                    }]
                });
    });
    //多数据折现图
    $(function () {
    var seriesOptions = [],
        seriesCounter = 0,
        names = ['MSFT', 'AAPL', 'GOOG'];
    /**
     * Create the chart when all data is loaded
     * @returns {undefined}
     */
    function createChart() {
        $('#expend').highcharts('StockChart', {
            chart: {
                zoomType: null,
                // pinchType: null
            },
            rangeSelector: {
                selected: 4
            },
            yAxis: {
                labels: {
                    formatter: function () {
                        return (this.value > 0 ? ' + ' : '') + this.value + '%';
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: 'silver'
                }]
            },
            plotOptions: {
                series: {
                    compare: 'percent',
                    showInNavigator: true
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                valueDecimals: 2,
                followTouchMove: false,
                split: true
            },
            series: seriesOptions
        });
    }
    $.each(names, function (i, name) {
        $.getJSON('https://data.jianshukeji.com/jsonp?filename=json/' + name.toLowerCase() + '-c.json&callback=?',    function (data) {
            seriesOptions[i] = {
                name: name,
                data: data
            };
            // As we're loading the data asynchronously, we don't know what order it will arrive. So
            // we keep a counter and create the chart when all the data is loaded.
            seriesCounter += 1;
            if (seriesCounter === names.length) {
                createChart();
            }
        });
    });
});
    // ==========================
    // 侧边导航下拉列表
    // ==========================

$('.tpl-left-nav-link-list').on('click', function() {
        $(this).siblings('.tpl-left-nav-sub-menu').slideToggle(80)
            .end()
            .find('.tpl-left-nav-more-ico').toggleClass('tpl-left-nav-more-ico-rotate');
    });
    // ==========================
    // 头部导航隐藏菜单
    // ==========================

$('.tpl-header-nav-hover-ico').on('click', function() {
    $('.tpl-left-nav').toggle();
    $('.tpl-content-wrapper').toggleClass('tpl-content-wrapper-hover');
});