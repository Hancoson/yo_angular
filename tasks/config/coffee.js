/**
 * Created by jyo on 15-4-20.
 */
module.exports = function(grunt) {
    grunt.config.set('coffee', {
        glob_to_multiple: {
            options: {
                sourceMap: true
            },
            expand: true,
            //flatten: true,
            sourceMap   : true,
            cwd: 'share/',
            src: ['**/*.coffee'],
            dest: 'share/',
            ext: '.js'
        }
    });


    grunt.loadNpmTasks('grunt-contrib-coffee');

};