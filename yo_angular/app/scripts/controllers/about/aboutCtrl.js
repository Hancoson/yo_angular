/**
 * Created by Hancoson on 15-4-28.
 */
angular.module('ngApp')
  .controller('aboutCtrl', ['$scope', '$http', function ($scope, $http) {

    var url = 'http://localhost:8001/json/main/about.json';
    $http.get(url).success(function (data) {
      $scope.tableDate = data

    })
  }]);


//.controller('aboutCtrl', ['scope', 'appService', function ($scope, appService) {
//  // console.log(appService);
//  // appService.aboutURL(function (params) {
//  // $scope.results = params.data;
//
//  // });
//  console.log(appService);
//  appService.aboutURL.get({}, function (data) {
//    console.log(appService);
//    //$scope.tableDate = data;
//  });
//
//}]);
