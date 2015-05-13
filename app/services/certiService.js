/**
 * Created by jyo on 15-3-14.
 */
     //module.exports={
     //   names: function () {
     //       return 'name';
     //   }
    //};
define("certiService", ["avalon"], function(avalon) {
    setEnv();
    function setEnv() {
        if(window.location.href.indexOf('m.dev.ikaowo')>(-1)){
            tumblr['env']='prepro';
        }
        else if(window.location.href.indexOf('m.ikaowo')>(-1)){
            tumblr['env']='main';
        }else{
            tumblr['env']='dev'
        }
    }
    //var
    var url={
        GetProStaD:'/pro/d'
    },domainName=tumblr['hosts'][tumblr['env']];
    avalon.GetProStaD= function (params,cb) {
        avalon.get(
            domainName+url.GetProStaD,
            //'http://192.168.8.107:1333/v1/pro/1d',
            params
        ).then(function (results) {
                return cb(null, results);
            }, function (err) {
                if(err) return cb(err);
            });

        //avalon.ajax({
        //    url:'http://192.168.8.107:1333/v1/pro/1d',
        //    type:'get',
        //    dataType:'json',
        //    success: function (results,sign) {
        //        if(sign!='OK') return cb('err');
        //        //console.log('sign:',sign);
        //        //console.log('results',results);
        //        //console.log();
        //
        //        return cb(null, results);
        //    },
        //    error: function (err) {
        //        console.log(err);
        //        if(err) return cb(err);
        //    }
        //});

    };
    return avalon;

});
    //tumblr['services']['certi']={
    //    a: function () {
    //        return '1';
    //    }
    //};
