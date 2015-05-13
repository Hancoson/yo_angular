/**
 * Created by jyo on 15-3-26.
 */
module.exports = function (grunt) {

    var options = {
        collapseBooleanAttributes    : true,
        collapseWhitespace           : true,
        removeAttributeQuotes        : true,
        removeComments               : true,
        removeEmptyAttributes        : true,
        removeScriptTypeAttributes   : true,
        removeStyleLinkTypeAttributes: true
    };
    grunt.config.set('htmlmin', {
        main  : {
            options: options,
            files  : {
                'dist/index.html' : 'dist/index.html',
                'dist/retina.html': 'dist/retina.html'
            }
        },
        nghtml: {
            options: options,
            files  : [{
                expand: true,
                src   : ['app/**/*.html'],
                dest  : 'dist/',
                ext   : '.html'
            }]
        },
        spapp : {
            options: options,
            files  : [{
                expand: true,
                src   : ['spApp/**/*.html'],
                dest  : 'dist/',
                ext   : '.html'
            }]
        },
        share:{
            options:options,
            files  : [{
                expand: true,
                src   : ['share/**/*.html'],
                dest  : 'dist/',
                ext   : '.html'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
};
