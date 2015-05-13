angular.module 'share',['ui.router','oc.lazyLoad','ngResource','lodash','ngSanitize']
angular.module 'share'
.config ['$stateProvider','$urlRouterProvider','$locationProvider','$ocLazyLoadProvider','$compileProvider'
 (stateP,urlRP,localP,ocLazyP,compP)->
     localP.hashPrefix ''
     compP.aHrefSanitizationWhitelist /^\s*(https?|kaowo|ftp|mailto|chrome-extension):/
     urlRP.otherwise '/mine/1'
     stateP
      .state 'mine',{
        title:''
        url:'/mine/:u_id'
        controller:'mineCtrl'
        templateUrl: 'share/partial/mine-partial/mine.html'
        resolve:
          loadOcModal:['$ocLazyLoad',($ocLazyLoad)->
            $ocLazyLoad.load [
              'share/partial/mine-partial/mineCtrl.js'
            ]
          ]
     }
]
angular.module 'share'
.run ['$location','$rootScope',
  ($location,$rootScope)->
    $rootScope.$on '$stateChangeStart',
    (event, toState, toParams, fromState, fromParams)->
      $rootScope.title=toState.title
]

angular.module 'share'
  .directive("scroll",($window)->
    (scope, element, attrs)->
      scope.maginTopHeight=(-200)
      scope.hheight=element.prop('offsetTop')
      angular
        .element($window)
        .bind( "scroll",(e)->

          if this.pageYOffset <0
            this.pageYOffset=0
#            if(this.pageYOffset >= 100)
#
#                scope.boolChangeClass = false

#                alert('this.pageYOffset:',this.pageYOffset)
#            scope.maginTopHeight=this.pageYOffset

            scope.$apply()
      )
)