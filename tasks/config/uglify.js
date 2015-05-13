/**
 * Created by Hancoson on 15-3-26.
 * js min
 */
module.exports = function (grunt) {
    grunt.config.set('uglify', {
        main  : {
            //src : ['app/controllers/tumblrCtrl.js'],
            //dest: 'dist/avalon/app.full.min.js'
        },
        //avalon: {
        //    src : ['bower_components/mmRouter/avalon.js'],
        //    dest: 'dist/avalon/lib.full.js'
        //},
        'share-lib'   : {
            options: {
                mangle: false,
                footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --app.lib'
            },
            src    : [
                'bower_components/zepto/zepto.min.js',
                'share/src/js/eventProxy.js',
                'bower_components/idangerous-swiper/dist/idangerous.swiper.js',
                'bower_components/angular/angular.js',
                'bower_components/angular-sanitize/angular-sanitize.min.js',
                'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                'bower_components/lodash/dist/lodash.min.js',
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/angular-lodash-module/angular-lodash-module.js',
                'bower_components/oclazyload/dist/ocLazyLoad.min.js'
            ],
            dest   : 'dist/share/lib.min.js'
        },
        'share-config':{
            options: {
                mangle: false,
                footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --app.config'
            },
            src:[
                'share/app.js',
                'share/services/Domains.js'
            ],
            dest:'dist/share/app.config.js'
        },
        'share-app':{
            options: {
                footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --app.config'
            },
            src:[
                'share/partial/**/*.js',
                'share/services/*.js',
                '!share/services/Domains.js'
            ],
            dest:'dist/share/app.min.js'
        }

    });
    grunt.loadNpmTasks('grunt-contrib-uglify');

};