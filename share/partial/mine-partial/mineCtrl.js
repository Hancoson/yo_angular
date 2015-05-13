(function() {
  angular.module('share').controller('mineCtrl', [
    '$scope', '$stateParams', '$state', '_', '$sce', 'jqMineTab', 'mineTab', '$timeout', '$rootScope', function(scope, stateP, state, _, sce, jqMineTab, Service, $t, $rootScope) {
      var imgwParam, input, maindiv, tumblrSet, width;
      maindiv = document.getElementById("main");
      width = maindiv.offsetWidth + 200;
      imgwParam = '?imageView2/2/w/';
      input = {
        u_id: state.params.u_id
      };
      scope.sty = {
        imgMgTop: {
          'margin-top': (-200) * 1 + 1. + 'px'
        }
      };
      scope.trustSrc = function(src) {
        return sce.trustAsResourceUrl(src);
      };
      scope.Datas = {
        tumblr: [],
        tags: [],
        userInfo: {},
        poList: [],
        cmmtList: [],
        mp4: []
      };
      tumblrSet = function(data) {
        if (data['tbr_img'].indexOf('.mp4') > (-1)) {
          return scope.Datas.mp4.push(data);
        } else {
          data['tbr_img'] += imgwParam + width;
          return scope.Datas.tumblr.push(data);
        }
      };
      scope.cls = {
        stars: {
          1: 'kw_star1',
          2: 'kw_star2',
          3: 'kw_star3',
          4: 'kw_star4',
          5: 'kw_star5'
        }
      };
      scope.Btns = {
        schema: function() {
          window.location.href = 'kaowo://user/mainpage?uid=' + input.u_id;
          return $t(function() {
            return window.location.href = 'http://fir.im/kaowo?u_id=' + input.u_id;
          }, 100, true);
        }
      };
      Service.allGet(input.u_id, function(err, datas) {
        var i, len, ref, tumblr;
        if (err) {
          return alert(err.data.msg);
        }
        if (datas.userInfo['ui_icon']) {
          datas.userInfo['ui_icon_hide'] = datas.userInfo['ui_icon'] + (imgwParam + 300);
          datas.userInfo['ui_icon'] += imgwParam + 192;
        } else {
          datas.userInfo['ui_icon'] = 'share/src/images/ui_icon.png';
        }
        if (datas.userInfo['backcover']) {
          datas.userInfo['backcover'] += imgwParam + width;
        } else {
          datas.userInfo['backcover'] = 'share/src/images/backcover.png';
        }
        scope.Datas.userInfo = datas.userInfo;
        console.log(datas.userInfo);
        $rootScope.title = "靠我专家" + scope.Datas.userInfo.nickname + "的主页 - 靠我电商智慧交易平台";
        $rootScope.content = scope.Datas.userInfo.ui_summary;
        ref = datas.tumblr;
        for (i = 0, len = ref.length; i < len; i++) {
          tumblr = ref[i];
          tumblrSet(tumblr);
        }
        scope.Datas.poList = datas.poList;
        scope.Datas.cmmtList = datas.cmmtList;
        return scope.Datas.tags = datas.tags;
      });
      return scope.$on('$viewContentLoaded', function() {
        var jqTable;
        return jqTable = new jqMineTab();
      });
    }
  ]);

}).call(this);

//# sourceMappingURL=mineCtrl.js.map
