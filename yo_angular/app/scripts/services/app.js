/**
 * Created by Hancoson on 15-4-28.
 */
angular.module('ngApp', ['ui.router', 'oc.lazyLoad'])
  .config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    /*$stateProvider
     .state('/', {
     url: '/',
     templateUrl: 'views/layout/footer.html'
     });*/

    $stateProvider

      .state('home', {
        //templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        url       : '',
        views     : {
          ''      : {
            //template: 'hello world'
            templateUrl: 'views/pages/main.html'
          },
          'header': {
            templateUrl: 'views/layout/header.html'
          },
          'footer': {
            templateUrl: 'views/layout/footer.html'
          }
        }


      })
      .state('about', {
        //templateUrl: 'views/main.html',
        controller: 'aboutCtrl',
        url       : '/about',
        views     : {
          ''      : {
            //template: 'hello world'
            templateUrl: 'views/pages/about.html'
          },
          'header': {
            templateUrl: 'views/layout/header.html'
          },
          'footer': {
            templateUrl: 'views/layout/footer.html'
          }
        },

        resolve: {
          loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load(
              [
                'styles/layout/back.css',
                'scripts/controllers/about/aboutCtrl.js'
              ]
            )
          }]
        }


      })
      .state('about/detail', {
        //templateUrl: 'views/main.html',
        controller: 'aboutCtrl',
        url       : '/about/:id',
        views     : {
          ''      : {
            //template: 'hello world'
            templateUrl: 'views/pages/detail.html'
          },
          'header': {
            templateUrl: 'views/layout/header.html'
          },
          'footer': {
            templateUrl: 'views/layout/footer.html'
          }
        }


      });
    $urlRouterProvider
      .otherwise('/404', {
        url: '/404',

        templateUrl: 'views/layout/header.html'

      });


  });
