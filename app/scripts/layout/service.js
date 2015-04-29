/**
 * Created by Hancoson on 15-4-28.
 */
angular.module('ngApp')
    //.controller('aboutCtrl', ['$scope', 'service', '$http'],function ($scope, service, $http) {
//    .controller('service',function ($scope, $http) {
//            //var config = {params:{u_id: '1'}};
//        //var url = service.dev;
//        var url = 'http://192.168.8.23:8001';
//
//        console.log(url)
//    })

    .controller('service',function () {
        var  service, hosts;
        //service = $l.hosts();
        hosts = {
            'dev': 'http://192.168.8.23:8001'
        }
        //console.log(hosts.dev)
    });
