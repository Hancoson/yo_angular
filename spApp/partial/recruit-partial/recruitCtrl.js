/**
 * Created by jyo on 15-3-26.
 */
angular.module('spApp')
    .controller('recruitCtrl', ['$scope','spService','$anchorScroll','$timeout','$location',
        function ($scope,spService,$anchorScroll,$timeout,$location) {
        var lwtDiv = document.getElementById("recruit"),
            width=lwtDiv.offsetWidth+150
            ;


        function regexPhone(phone) {
            var regex = {
                mobile: /^0?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
            };

            var patt1=new RegExp(regex.mobile);

            return patt1.test(phone);
        }

        $scope.sty = {
            formshow:true,
            thanksShow:false,
            show: false

        };

        $scope.Btn = {
            submit: function (formdata) {
                if(!regexPhone(formdata.phone)){
                    return alert('电话号码格式不正确');
                }

                if(!formdata.name||formdata.name.length<1){
                    return  alert('请输入姓名');
                }

                if(!formdata.name||formdata.summary.length<1){
                    return  alert('请输入技能介绍');
                }

                console.log(spService);
                spService.recruit.save({
                    nickname:formdata.name,
                    phone:formdata.phone,
                    summary:formdata.summary
                }, function (data) {
                    $scope.sty.formshow=false;
                    $scope.sty.thanksShow=true;
                }, function (err) {
                    if(err.data.status==409){
                        $scope.sty.formshow=false;
                        $scope.sty.thanksShow=true;
                        return  alert(err.data.msg);

                    }
                     if(err.data&&err.data.msg)
                         return  alert(err.data.msg);


                })
            }
        };
var index=0;
        $scope.Datas = {
            imgs:[
                {url:'http://ad-ikaowo.qiniudn.com/shenqing-image_01.png?imageView2/2/w/'+(width+200)},
                {url:'http://ad-ikaowo.qiniudn.com/shenqing-image_02.png?imageView2/2/w/'+(width+200)},
                {url:'http://ad-ikaowo.qiniudn.com/shenqing-image_03.png?imageView2/2/w/'+(width+200)},
                {url:'http://ad-ikaowo.qiniudn.com/shenqing-image_04.png?imageView2/2/w/'+(width+200)}
            ],
            formdata:{
                name:'',
                phone:'',
                summary:''
            }
        };
            //$timeout(function () {

            //},1500,true);
        $scope.$on('$viewContentLoaded', function() {
            //call it here
            var lwtDiv = document.getElementById("recruit");
            $scope.$on('show', function (data) {
                index++;
                var lwtDiv = document.getElementById("recruit");

                if(index==3){
                     $location.hash('anchor');
                    $anchorScroll();

                }


            });




        });

    }]);