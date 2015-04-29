/**
 * Created by Hancoson on 15-4-28.
 */
angular.module('ngApp')
    .controller('aboutCtrl', function ($scope, $http) {
        console.log('aboutCtrl')
        $scope.Datas = {};
        $http.get("http://192.168.8.23:8001/json/main/about.json").success(function(data){
            $scope.tableDate=data;
            //$scope.msg
            console.log(data)
        })


    });
