/**
 * Created by Hancoson on 15-4-28.
 */
angular.module('ngApp')
    .controller('aboutCtrl', function ($scope, $http) {
        //var config = {params:{u_id: '1'}};
        //var url = host.dev;

        var url = 'http://192.168.8.23:8001/json/main/about.json';
        $http.get(url).success(function (data) {
            $scope.tableDate = data

        })
    });


/*.controller('aboutCtrl', function ($scope, appService) {
    console.log(appService);
    appService.aboutURL(function (params) {
        $scope.results = params.data;

    });

});*/
