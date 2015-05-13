/**
 * Created by jyo on 15-3-19.
 */
angular
    .module('kaowoApp')
    .factory('kaowoService', [ '$resource','$location','Domains',function ($resource, $location, dd) {
        
        var
            domain = $location.host(),
            env ,host,
            hosts = {
                'dev'   : 'http://192.168.8.107:1333/v1',
                //'dev'   : 'http://api.ikaowo.com/v1',
                'main'  : 'http://api.ikaowo.com/v1',
                'prepro': 'http://api.dev.ikaowo.com/v1'
            },
            domainHosts={
                'm.dev.ikaowo.com':'prepro',
                'm.ikaowo.com':'main',
                '192.168.8.107':'dev'
            };
        env=domainHosts[domain] || 'dev';
        host=hosts[env];
        
        return {
            tumblr:$resource(host+'/user/tumblr/:u_id',{}),
            summary:$resource(host+'/user/summary/:u_id',{}),
            tags:$resource(host+'/tags/:u_id',{}),
            prosD:$resource(host+'/pro/d',{}),
            //获取推荐专家
            rcmdtPros:$resource(host+'/nxrcmdt/pros/:cp/:ps',{}),
            //获取爆款专家
            rcmdtHotSell:$resource(host+'/recommend/hotsell',{}),
            recommend:$resource('',{},{
                gopros:{
                    //url:'http://192.168.8.107:1331/recommend/pros/:cata'
                    url:dd['ms']+'/recommend/pros/:cata'
                }
            })
            
            //    $resource('', {}, {
            //    listGet : {
            //         method: 'GET', params: {}, isArray: false,url: host+'/user/tumblr'+this.params,
            //    },
            //    summary: {
            //        method: 'GET', params: {}, isArray: false,url: host+'/user/summary',
            //    }
            //})
        }
}]);