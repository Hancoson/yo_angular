/**
 * Created by Hancoson on 15-4-28.
 */
//angular.module('ngApp')
//    //.controller('aboutCtrl', ['$scope', 'service', '$http'],function ($scope, service, $http) {
//    //    .controller('service',function ($scope, $http) {
//    //            //var config = {params:{u_id: '1'}};
//    //        //var url = service.dev;
//    //        var url = 'http://192.168.8.23:8001';
//    //
//    //        console.log(url)
//    //    })
//
//.controller('service', function () {
//    var service, hosts;
//    //service = $l.hosts();
//    hosts = {
//            'dev': 'http://192.168.8.23:8001'
//        }
//        //console.log(hosts.dev)
//});


//var app = angular.module('ngApp', []);
////定义一些请求的url
////app.factory('Path', function () {
////    return {
////        hosts: 'http://192.168.8.23:8001/json/main'
////        //mirror_request_url: 'http://0.0.0.0:3002/apis/v1_1/'
////    }
////});
//
//app.factory('appService', ['$resource', function ($resource) {
//    var hosts={
//        mainURl: 'http://192.168.8.23:8001/json/main'
//    }
//    var host = hosts.mainURl;
//    console.log(host);
//    return {
//        aboutURL: $resource(host + '/about.json', {}),
//    }
//}]);
