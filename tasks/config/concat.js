/**
 * Created by Hancoson on 15-3-26.
 */
module.exports = function(grunt) {

    grunt.config.set('concat', {
        main: {
            //src : [
            //    //'<%= dom_munger.data.appjs %>',
            //    //'<%= ngtemplates.main.dest %>',
            //    'bower_components/avalon/min/avalon.min.js'],
            //dest: 'dist/avalon/lib.full.js'
        },
        nglibconcat:{
            src:[
                'bower_components/angular/angular.min.js',
                'bower_components/angular-sanitize/angular-sanitize.min.js',
                'bower_components/angular-sanitize/angular-sanitize.min.js',
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/angular-animate/angular-animate.min.js',

                'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                'bower_components/lodash/dist/lodash.min.js',
                'bower_components/angular-lodash-module/angular-lodash-module.js',
                'bower_components/oclazyload/dist/ocLazyLoad.min.js',
                'bower_components/jquery/dist/jquery.min.js',
                //'bower_components/zepto/zepto.min.js',
                'bower_components/async/lib/async.js',
                'bower_components/jquery/dist/jquery.min.js',
            ],
            dest:'dist/ngapp/nglib.js'
        },
        ngappconcat:{
            src:[
                'app/ngApp.js',
                //'app/services/kaowoServices.js'
                //'app/partial/tumblr-partial/tumblrCtrl.js',
                //'app/partial/ad-partial/adCtrl.js',
                //'app/directive/imageonload.js',
                //'app/services/kaowoServices.js'
            ],
            dest:'dist/ngapp/ngapp.js'
        },
        spapplib:{
            src:[
                'bower_components/angular/angular.min.js',
                'bower_components/angular-ui-router/release/angular-ui-router.js',
                'bower_components/lodash/dist/lodash.min.js',
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/angular-lodash-module/angular-lodash-module.js',
                'bower_components/oclazyload/dist/ocLazyLoad.min.js'
            ],
            dest:'dist/spApp/spapplib.js'
        },

        spapp:{
            src:['spApp/spapp.js'],
            dest:'dist/spApp/spapp.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};
