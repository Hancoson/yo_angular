/**
 * Created by jyo on 15-3-26.
 */
module.exports = function (grunt) {

    grunt.config.set('copy', {
	main : {
	    files: [
		//{
		//    src    : [
		//	'bower_components/mmRouter/avalon.mobile.js',
		//	'bower_components/mmRouter/mmRouter.js',
		//	'bower_components/mmRouter/mmState.js',
		//	'bower_components/mmRouter/mmPromise.js',
		//	'bower_components/mmRouter/mmHistory.js'
		//    ], dest: 'dist/avalon', filter: 'isFile',
		//    flatten: true,
		//    expand : true
		//},
		{
		    src    : ['src/styles/pages/tumblr-list/css/*'], dest: 'dist/assets', filter: 'isFile',
		    flatten: true,
		    expand : true
		},
		{
		    src    : ['src/styles/pages/tumblr-list/css/iconfont/*'], dest: 'dist/iconfont', filter: 'isFile',
		    flatten: true,
		    expand : true
		},
		//{
		//    src    : ['src/scripts/mmRequest.js'], dest: 'dist/avalon', filter: 'isFile',
		//    flatten: true,
		//    expand : true
		//},
		{
		    src: ['app/views/*.html'], dest: 'dist/', filter: 'isFile'
		    //flatten: true,
		    //expand:true
		},
		//{
		//    src    : ['app/controllers/**'], dest: 'dist/avalon', filter: 'isFile',
		//    flatten: true,
		//    expand : true
		//},
		//{
		//    src    : ['app/services/**'], dest: 'dist/avalon', filter: 'isFile',
		//    flatten: true,
		//    expand : true
		//},
		{
		    src   : ['app/less/**', 'app/partial/**', 'bower_components/fullpage.js/jquery.fullPage.css'],
		    dest  : 'dist/',
		    fulter: 'isFile'
		},
		{
		    src    : ['bower_components/jquery/dist/jquery.min.map'], dest: 'dist/ngapp', filter: 'isFile',
		    flatten: true,
		    expand : true
		},
		{
		    src   : ['bower_components/**/*.js', 'bower_components/**/*.map', 'app/**/*.js', 'app/**/*.css'],
		    dest  : 'dist/',
		    filter: 'isFile',
		    expand: true
		}
	    ]
	},
	//avalon: {
	//    files: [
	//        {
	//            src    : ['app/controllers/**'], dest: 'dist/avalon', filter: 'isFile',
	//            flatten: true,
	//            expand : true
	//        },
	//        {
	//            src    : ['app/services/**'], dest: 'dist/avalon', filter: 'isFile',
	//            flatten: true,
	//            expand : true
	//        }
	//    ]
	//},
	spapp: {
	    files: [
		{
		    src   : ['spApp/**', '!spApp/**/*.less'], dest: 'dist/', filter: 'isFile',
		    expand: true
		},
		{
		    src    : ['bower_components/angular-resource/*.map'], dest: 'dist/spApp', filter: 'isFile',
		    flatten: true,
		    expand : true
		}
	    ]
	},
	share: {
	    files: [
		{
		    src    : ['bower_components/angular-resource/*.map'], dest: 'dist/share', filter: 'isFile',
		    flatten: true,
		    expand : true
		},
		{
		    src   : ['share/src/images/**', 'share/partial/**/*.js', 'share/partial/**/*.map', 'share/**/*.coffee'],
		    dest  : 'dist/', filter: 'isFile',
		    expand: true
		}
	    ]
	}
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
