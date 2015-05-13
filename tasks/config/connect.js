/**
 * Created by Hancoson on 15-3-26.
 */
module.exports = function(grunt) {

    grunt.config.set('connect', {
        main: {
            options: {
                hostname: '0.0.0.0',
                port    : 8002,
                base    : 'dist/'
            }
        },
        dev : {
            options: {
                hostname: '0.0.0.0',
                port    : 8001
                //base:'dist/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
