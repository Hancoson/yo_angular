/**
 * Created by jyo on 15-3-26.
 */
module.exports = function (grunt) {
    var lessOptions={
        compress    : true,
        cleancss    : true,
        optimization: 2,
        sourceMap   : true
    };
    grunt.config.set('less', {
        production: {
            options: {},
            files  : {
                'src/styles/app.css': ['app/less/*.less']
            }
        },
        ngless    : {
            options:lessOptions,
            files  : [{
                expand: true,
                src   : ['app/**/*.less'],
                dest  : './',
                ext   : '.css'
            }]
        },
        spapp:{
            options:lessOptions,
            files  : [{
                expand: true,
                src   : ['spApp/**/*.less'],
                dest  : './',
                ext   : '.css'
            }]
        },
        share:{
            options:lessOptions,
            files  : [{
                expand: true,
                src   : ['share/**/*.less'],
                dest  : './',
                ext   : '.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
};