/**
 * Created by Hancoson on 15-3-26.
 */
angular.module('spApp', ['ui.router', 'oc.lazyLoad', 'ngResource', 'lodash']);

angular
    .module('spApp')
    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    })
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider, $compileProvider) {
        $locationProvider.hashPrefix('');
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|kaowo|ftp|mailto|chrome-extension):/);
        $urlRouterProvider.otherwise('/enlist');
        $stateProvider
            //立即加入,成为「靠我」专家
            .state('recruit', {
                url        : '/recruit',
                controller : 'recruitCtrl',
                title      : '立即加入,成为「靠我」专家',
                templateUrl: 'spApp/partial/recruit-partial/recruit.html',
                resolve    : {
                    loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            [

                                'spApp/partial/recruit-partial/recruit.css',
                                'spApp/services/spService.js',
                                'spApp/directive/imageonload.js',
                                'spApp/partial/recruit-partial/recruitCtrl.js'
                            ]
                        )
                    }]
                }
            })
    })
    .run(['$location', '$rootScope', function ($location, $rootScope) {

        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                //console.log('toState:',toState);
                //console.log('toParams:',toParams);
                $rootScope.title = toState.title;
            })
    }]);
