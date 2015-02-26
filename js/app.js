var routerApp = angular.module('routerApp', ['ui.router', 'ngGrid', 'ui.bootstrap','qiuGouDirectives','orderList','user']);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 * ui.router 是ui路由的模块
 * ngGrid 是grid的模块
 * ui.bootstrap 是anglar-ui插件的模块
 */
routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpls/loginPage.html'
                },
                'main@index': {
                    templateUrl: 'tpls/login.html'
                }
            }
        })
        .state('index.register', {
            url: '/register',
            views: {
                'main@index': {
                    templateUrl: 'tpls/register.html'
                }
            }
        })


        .state('home', {
            url: '/home',
            views: {
                '': {
                    templateUrl: 'tpls/homePage.html'
                },
                'main@home': {
                    templateUrl: 'tpls/homeContent.html'
                }
            }
        })

        .state('home.userspace', {
            url: '/userspace',
            views: {
                'main@home': {
                    templateUrl: 'tpls/userSpace.html'
                },
                'userInfo@home.userspace': {
                    templateUrl: 'tpls/userSpace.userInfo.html'
                },
                'userState@home.userspace': {
                    templateUrl: 'tpls/userSpace.userState.html'
                }
            }
        })

        .state('home.attention', {
            url: '/guanzhu',
            views: {
                'main@home': {
                    templateUrl: 'tpls/attentionList.html'
                }
            }
        })

});
