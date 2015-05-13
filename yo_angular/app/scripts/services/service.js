/**
 * Created by Hancoson on 15-4-28.
 */

/* var app = angular.module('ngApp', []);

 app.factory('appService',  function () {
 var appService ={};
 appService.query = function(){
 var hosts={
 mainURl: 'http://192.168.8.23:8001/json/main'
 }
 var host = hosts.mainURl;
 console.log(host);
 return {
 aboutURL: $resource(host + '/about.json', {})
 }
 }
 return appService;

 }); */

angular.module('ngApp')
  .factory('appService', function ($resource, $location) {
    //console.log(11);
    //var domain = $location.host(), env, host,
    //  hosts = {
    //    'dev'   : 'http://192.168.8.23:8001/json/main',
    //    'prepro': 'http://192.168.8.23:8001/json/main',
    //    'main'  : 'http://192.168.8.23:8001/json/main'
    //  },
    //  domainHosts = {
    //    'localhost': 'dev',
    //    'localhost': 'prepro',
    //    'localhost': 'main'
    //  };
    //env = domainHosts[domain] || 'dev';
    //host = hosts[env];
    return {
      //aboutURL: $resource(host + '/about.json', {})
      aboutURL: $resource('http://192.168.8.23:8001/json/main' + '/about.json', {})
    }
  });
