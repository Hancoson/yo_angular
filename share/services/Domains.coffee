angular.module 'share'
.factory 'Domains', ['$location',
  ($l)->
    domain = $l.host()
    hosts =
      'dev'   : 'http://192.168.8.107:1331'
      'main'  : 'http://ms.ikaowo.com'
      'prepro': 'http://ms.dev.ikaowo.com'
    apihosts=
      'dev'   : 'http://192.168.8.107:1333'
      'main'  : 'http://api.ikaowo.com'
      'prepro': 'http://api.dev.ikaowo.com'
    domainHosts=
      'm.dev.ikaowo.com':'prepro'
      'local2dev.ikaowo.com':'prepro'
      'm.ikaowo.com':'main'
      'local2main.ikaowo.com':'main'
      '192.168.8.107':'dev'
    env=domainHosts[domain] || 'dev'
    host=
      ms:hosts[env]
      api:apihosts[env]
]
