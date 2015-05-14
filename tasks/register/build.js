module.exports = function (grunt) {
	grunt.registerTask('build-ngapp', [
		//css
		'cssmin:common',

		//'jshint',
		'clean:ngapp-before',
		'less:production',
		'less:ngless',
		'dom_munger:read',
		'dom_munger:update',
		'dom_munger:ngupdate',
		//'ngtemplates',
		'cssmin:main',
		'concat:main',
		'uglify:ngapplib-js',
		'uglify:ngapp-js',
		//'ngAnnotate',
		'uglify:main',
		//'uglify:avalon',
		//'uglify:lib',
		'copy:main',
		//'copy:avalon',
		'htmlmin:main',
		'htmlmin:nghtml',
		'clean:after'
	]);

	grunt.registerTask('build-spapp', [




		//'jshint',
		'clean:spapp-before',
		'less:spapp',
		//'dom_munger',
		'dom_munger:spapp',

		//css
		'cssmin:common',
		'cssmin:spapp',

		//'cssmin',
		//'concat:spapplib',
		//'concat:spapp',
		'uglify:spapplib-js',
		'uglify:spapp-js',
		//'uglify',
		//'uglify:lib',
		'copy:spapp',
		'htmlmin:spapp',
		'clean:after'
	]);

	grunt.registerTask('build-share', [
		//css
		'cssmin:common',

		'clean:share-before',
		'coffee',
		'less:share',
		'cssmin:share',
		'uglify:share-lib',
		'uglify:share-config',
		'uglify:share-app',
		'htmlmin:share',
		'copy:share',
		'dom_munger:share',
		'clean:after'
	])

};
