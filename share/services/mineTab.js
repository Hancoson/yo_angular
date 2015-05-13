(function() {
  angular.module('share').factory('mineTab', [
    '$resource', 'Domains', '$q', function($r, domains, Q) {
      var re;
      re = {
        user: $r('', {}, {
          userInfo: {
            url: domains.api + '/v1/user_info/:u_id'
          },
          tumblr: {
            url: domains.api + '/v1/user/tumblr/:u_id'
          },
          tags: {
            url: domains.api + '/v1/tags/:u_id'
          }
        }),
        comments: $r('', {}, {
          listGet: {
            url: domains.api + '/v1/comments/:u_id/0/5'
          }
        }),
        social: $r('', {}, {
          poList: {
            url: domains.api + '/v1/social/po/list/:u_id/0/5'
          }
        })
      };
      re['allGet'] = function(u_id, cb) {
        var evp;
        evp = new EventProxy();
        re.user.userInfo({
          u_id: u_id
        }, function(results) {
          return evp.emit('userInfo', results['user_info']);
        }, function(err) {
          return cb(err);
        });
        re.user.tumblr({
          u_id: u_id
        }, function(results) {
          return evp.emit('tumblr', results['tumblr']);
        }, function(err) {
          return cb(err);
        });
        re.user.tags({
          u_id: u_id
        }, function(results) {
          return evp.emit('tags', results['tags']);
        }, function(err) {
          return cb(err);
        });
        re.comments.listGet({
          u_id: u_id
        }, function(results) {
          return evp.emit('listGet', results['datas']['list']);
        }, function(err) {
          return cb(err);
        });
        re.social.poList({
          u_id: u_id
        }, function(results) {
          return evp.emit('poList', results['polist']['list']);
        }, function(err) {
          return cb(err);
        });
        return evp.all('userInfo', 'tumblr', 'tags', 'listGet', 'poList', function(ui, tbr, tags, cmmtList, poList) {
          return cb(false, {
            userInfo: ui,
            tumblr: tbr,
            cmmtList: cmmtList,
            tags: tags,
            poList: poList
          });
        });
      };
      return re;
    }
  ]);

}).call(this);

//# sourceMappingURL=mineTab.js.map
