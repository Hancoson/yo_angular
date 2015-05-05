angular.module 'share'
.factory 'mineTab' ,['$resource','Domains','$q',
  ($r,domains,Q)->
    re=
      user:$r '' ,{},{
        userInfo:
          url:domains.api+'/v1/user_info/:u_id'
        userInfo1:
          url:domains.api+'/v1/user_info/:u_id'
        userInfo2:
          url:domains.api+'/v1/user_info/:u_id'
      }
    return re
]
