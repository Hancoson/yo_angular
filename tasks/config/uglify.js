/**
 * Created by Hancoson on 15-3-26.
 * js min
 */
module.exports = function (grunt) {
	grunt.config.set('uglify', {
		main: {
			//src : ['app/controllers/tumblrCtrl.js'],
			//dest: 'dist/avalon/app.full.min.js'
		},
		//avalon: {
		//    src : ['bower_components/mmRouter/avalon.js'],
		//    dest: 'dist/avalon/lib.full.js'
		//},

		//ngapp
		'ngapplib-js': {
			options: {
				mangle: false,
				footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --spapp.config'
			},
			src : [
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
				'bower_components/async/lib/async.js'
			],
			dest: 'dist/ngapp/ngapp-lib.min.js'
		},
		'ngapp-js': {
			options: {
				mangle: false,
				footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --spapp.config'
			},
			src : [
				'app/ngApp.js'
				//'app/services/kaowoServices.js'
				//'app/partial/tumblr-partial/tumblrCtrl.js',
				//'app/partial/ad-partial/adCtrl.js',
				//'app/directive/imageonload.js',
				//'app/services/kaowoServices.js'
			],
			dest: 'dist/ngapp/ngapp.min.js'
		},




		//spapp
		'spapplib-js': {
			options: {
				mangle: false,
				footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --spapp.config'
			},
			src    : [
				'bower_components/angular/angular.min.js',
				'bower_components/angular-ui-router/release/angular-ui-router.js',
				'bower_components/lodash/dist/lodash.min.js',
				'bower_components/angular-resource/angular-resource.min.js',
				'bower_components/angular-lodash-module/angular-lodash-module.js',
				'bower_components/oclazyload/dist/ocLazyLoad.min.js'
			],
			dest   : 'dist/spApp/spapp-lib.min.js'
		},
		'spapp-js'   : {
			options: {
				mangle: false,
				footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --spapp.config'
			},
			src    : ['spApp/spapp.js'],
			dest   : 'dist/spApp/spapp.min.js'
		},
		//share
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
		'share-config': {
			options: {
				mangle: false,
				footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --app.config'
			},
			src    : [
				'share/app.js',
				'share/services/Domains.js'
			],
			dest   : 'dist/share/app.config.js'
		},
		'share-app'   : {
			options: {
				footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --app.config'
			},
			src    : [
				'share/partial/**/*.js',
				'share/services/*.js',
				'!share/services/Domains.js'
			],
			dest   : 'dist/share/app.min.js'
		}

	});
	grunt.loadNpmTasks('grunt-contrib-uglify');

};