/**
 * Created by Hancoson on 15-3-26.
 */



module.exports = function (grunt) {
    var createFolderGlobs = require('../createFolderGlobs.js');
    grunt.config.set('watch', {
        main: {
            options: {
                livereload       : 35729,
                livereloadOnError: false,
                spawn            : false
            },
            files  : [createFolderGlobs(['*.less', '*.html', 'app/*/*.js']), '!_SpecRunner.html', '!.grunt'],
            //tasks  : ['less', 'copy:avalon']
            tasks  : ['less', 'copy']
            //all the tasks are run dynamically during the watch event handler
        },
        dist: {
            options: {
                livereload       : 35730,
                livereloadOnError: false,
                spawn            : false
            },

            files  : [createFolderGlobs(['*.less','share/**/*.css', '*.html', 'app/*/*.js']), '!_SpecRunner.html', '!.grunt'],
            tasks  : ['less','cssmin:share']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
