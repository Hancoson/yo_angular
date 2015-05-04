/**
 * Created by Hancoson on 15-4-28.
 */
angular.module('ngApp')
    //.controller('aboutCtrl', ['$scope', 'service', '$http'],function ($scope, service, $http) {
    .controller('mainCtrl', function ($scope, $http) {
        //var config = {params:{u_id: '1'}};
        //var url = host.dev;
        var url = 'http://localhost:8001/json/main/main.json';
        $http.get(url).success(function (data) {
            $scope.main = data;
        })


    });
