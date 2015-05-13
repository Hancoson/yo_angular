/**
 * Created by jyo on 15-3-21.
 */
angular.module('kaowoApp')
    .controller('lwtCtrl', function ($scope) {
        document.getElementById('indexTitle').innerText = '辰末有话说';

        var lwtDiv = document.getElementById("lwt"),
            width=lwtDiv.offsetWidth+300,
            widthParam='?imageView2/2/w/'
            ;
        $scope.Datas={imgs:[]};
        imgList=['http://ad-ikaowo.qiniudn.com/cm-chenmo_01.jpg',
            'http://ad-ikaowo.qiniudn.com/cm-chenmo_02.jpg',
            'http://ad-ikaowo.qiniudn.com/cm-chenmo_03.jpg',
            'http://ad-ikaowo.qiniudn.com/cm-chenmo_04.jpg',
            'http://ad-ikaowo.qiniudn.com/cm-chenmo_05.jpg',
            'http://ad-ikaowo.qiniudn.com/cm-chenmo_06.jpg'];
        imgList.forEach(function (data,index) {
            $scope.Datas.imgs.push(data+widthParam+width)
        });
        $scope.Datas['imgs_btn']=['http://ad-ikaowo.qiniudn.com/lwt-header_04.png'+'?imageView2/2/w/'+width];



    });