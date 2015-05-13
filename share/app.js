(function() {
  angular.module('share', ['ui.router', 'oc.lazyLoad', 'ngResource', 'lodash', 'ngSanitize']);

  angular.module('share').config([
    '$stateProvider', '$urlRouterProvider', '$locationProvider', '$ocLazyLoadProvider', '$compileProvider', function(stateP, urlRP, localP, ocLazyP, compP) {
      localP.hashPrefix('');
      compP.aHrefSanitizationWhitelist(/^\s*(https?|kaowo|ftp|mailto|chrome-extension):/);
      urlRP.otherwise('/mine/1');
      return stateP.state('mine', {
        title: '',
        url: '/mine/:u_id',
        controller: 'mineCtrl',
        templateUrl: 'share/partial/mine-partial/mine.html',
        resolve: {
          loadOcModal: [
            '$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load(['share/partial/mine-partial/mineCtrl.js']);
            }
          ]
        }
      });
    }
  ]);

  angular.module('share').run([
    '$location', '$rootScope', function($location, $rootScope) {
      return $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        return $rootScope.title = toState.title;
      });
    }
  ]);

  angular.module('share').directive("scroll", function($window) {
    return function(scope, element, attrs) {
      scope.maginTopHeight = -200.;
      scope.hheight = element.prop('offsetTop');
      return angular.element($window).bind("scroll", function(e) {
        if (this.pageYOffset < 0) {
          this.pageYOffset = 0;
          return scope.$apply();
        }
      });
    };
  });

}).call(this);

//# sourceMappingURL=app.js.map
