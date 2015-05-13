/**
 * Created by jyo on 15-4-17.
 */
(function () {
    angular.module('share').factory('jqMineTab', ['$resource', '$location', function ($r, $l) {
        function jqTab() {
            console.log('jqTab');
            $(function () {

                var kaoWo = {
                    init: function () {
                        this.jQuerytab();
                        this.eventHandler();
                        setTimeout(function () {
                            $('#tumblr').click()
                        },1000);
                    }
                }
                $.extend(kaoWo, {
                    jQuerytab: function () {

                        var tabsSwiper = new Swiper('.swiper-container', {
                            speed: 500,
                            onSlideChangeStart: function () {
                                $(".tabs .active").removeClass('active');
                                $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active');
                                var _height = $(".swiper-slide-active>.content").height();
                                //console.log(_height);
                                $(".swiper-slide,.swiper-wrapper").height(_height);

                            }
                        });

                        $(".tabs a").on('touchstart mousedown', function (e) {
                            e.preventDefault()
                            $(".tabs .active").removeClass('active');
                            $(this).addClass('active');
                            tabsSwiper.swipeTo($(this).index());
                            var _height = $(".swiper-slide-active>.content").height();
                            //console.log(_height);
                            $(".swiper-slide,.swiper-wrapper").height(_height);

                        });

                        $(".tabs a").click(function (e) {
                            e.preventDefault();
                            var _height = $(".swiper-slide-active>.content").height();
                            //console.log(_height);
                            $(".swiper-slide,.swiper-wrapper").height(_height);
                        });
                        var _height = $(".swiper-slide-active>.content").height();
                        //console.log(_height);
                        $(".swiper-slide,.swiper-wrapper").height(_height);
                    },
                    eventHandler: function () {
                        $("#J_closeBtn").on("click", function () {
                            $("#J_downBox").hide();
                            $("#J_conFixed").removeClass("mb_fixed");
                        })
                        //$("title.ng-binding").html("Datas.userInfo.nickname");
                        var _imgW = $(".kw_logo img").width();
                        $(".kw_logo img").height(_imgW);
                    }
                });
                kaoWo.init();

            })
        }
        return jqTab;
    }])
}).call(this);