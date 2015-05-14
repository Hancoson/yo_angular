/**
 * Created by Hancoson on 15-3-26.
 */
module.exports = function (grunt) {

	grunt.config.set('cssmin', {
		options: {
			//美化代码
			beautify: {
				//中文ascii化，非常有用！防止中文乱码的神配置
				ascii_only: true
			}
		},
		//common
		common : {
			src : [
				'src/styles/*.css'

			],
			dest: 'dist/src/styles/common.min.css'
		},

		//spapp
		spapp: {

			page: {
				expand:true,
				cwd:'spApp/partial/**',
				src:'style.css',
				dest:'dist/spApp/partial/**',
				ext:'.min.css'
			}
		},


		main : {
			src : ['temp/app.css',
				//'<%= dom_munger.data.appcss %>',
				'src/styles/pages/tumblr-list/css/*.css',
				'src/styles/*.css'

			],
			dest: 'dist/app.full.min.css'
		},
		share: {
			src : [
				'share/partial/**/*.css',
				'share/src/**/*.css'
			],
			dest: 'dist/share/app.full.min.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
