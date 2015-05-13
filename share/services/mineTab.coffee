angular.module 'share'
.factory 'mineTab' ,['$resource','Domains','$q',
  ($r,domains,Q)->
    re=
      user:$r '' ,{},{
        userInfo:
          url:domains.api+'/v1/user_info/:u_id'
        tumblr:
          url:domains.api+'/v1/user/tumblr/:u_id'
        tags:
          url:domains.api+'/v1/tags/:u_id'
      }
      comments:$r '',{},{
        listGet:
          url:domains.api+'/v1/comments/:u_id/0/5'
      }
      social:$r '',{},{
        poList:
          url:domains.api+'/v1/social/po/list/:u_id/0/5'
      }

    re['allGet']=(u_id,cb)->
      evp=new EventProxy()

      re.user.userInfo({u_id:u_id},
        (results)->
          evp.emit('userInfo',results['user_info'])
        (err)->
          cb(err)
      )
      re.user.tumblr({u_id:u_id},
        (results)->
          evp.emit('tumblr',results['tumblr'])
        (err)->
          cb(err)
      )
      re.user.tags({u_id:u_id},
        (results)->
          evp.emit('tags',results['tags'])
        (err)->
          cb(err)
      )
      re.comments.listGet({u_id:u_id},
        (results)->
          evp.emit('listGet',results['datas']['list'])
        (err)->
          cb(err)
      )
      re.social.poList({u_id:u_id},
        (results)->
          evp.emit('poList',results['polist']['list'])
        (err)->
          cb(err)
      )
      evp.all('userInfo','tumblr','tags','listGet','poList',
        (ui,tbr,tags,cmmtList,poList)->
          cb(no,{
            userInfo:ui,
            tumblr:tbr,
            cmmtList:cmmtList,
            tags:tags,
            poList:poList
          })
      )

    return re
]