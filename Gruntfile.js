/*jslint node: true */
'use strict';

var pkg = require('./package.json');

//Using exclusion patterns slows down Grunt significantly
//instead of creating a set of patterns like '**/*.js' and '!**/node_modules/**'
//this method is used to create a set of inclusive patterns for all subdirectories
//skipping node_modules, bower_components, dist, and any .dirs
//This enables users to create any directory structure they desire.
var createFolderGlobs = function (fileTypePatterns) {
    fileTypePatterns = Array.isArray(fileTypePatterns) ? fileTypePatterns : [fileTypePatterns];
    var ignore = ['node_modules', 'bower_components', 'dist', 'temp'];
    var fs = require('fs');
    return fs.readdirSync(process.cwd())
        .map(function (file) {
            if (ignore.indexOf(file) !== -1 || file.indexOf('.') === 0 || !fs.lstatSync(file).isDirectory()) {
                return null;
            } else {
                return fileTypePatterns.map(function (pattern) {
                    return file + '/**/' + pattern;
                });
            }
        })
        .filter(function (patterns) {
            return patterns;
        })
        .concat(fileTypePatterns);
};

module.exports = function (grunt) {


    // Load the include-all library in order to require all of our grunt
    // configurations and task registrations dynamically.
    var includeAll;
    try {
        includeAll = require('include-all');
    } catch (e0) {
        try {
            includeAll = require('node_modules/include-all');
        }
        catch (e1) {
            console.error('Could not find `include-all` module.');
            console.error('Skipping grunt tasks...');
            console.error('To fix this, please run:');
            console.error('npm install include-all --save`');
            console.error();

            grunt.registerTask('default', []);
            return;
        }
    }


    /**
     * Loads Grunt configuration modules from the specified
     * relative path. These modules should export a function
     * that, when run, should either load/configure or register
     * a Grunt task.
     */
    function loadTasks(relPath) {
        return includeAll({
            dirname: require('path').resolve(__dirname, relPath),
            filter : /(.+)\.js$/
        }) || {};
    }

    /**
     * Invokes the function from a Grunt configuration module with
     * a single argument - the `grunt` object.
     */
    function invokeConfigFn(tasks) {
        for (var taskName in tasks) {
            if (tasks.hasOwnProperty(taskName)) {
                tasks[taskName](grunt);
            }
        }
    }


    // Load task functions
    var taskConfigurations = loadTasks('tasks/config'),
        registerDefinitions = loadTasks('tasks/register');

    // (ensure that a default task exists)
    if (!registerDefinitions.default) {
        registerDefinitions.default = function (grunt) {
            grunt.registerTask('default', []);
        };
    }

    // Run task functions to configure Grunt.
    invokeConfigFn(taskConfigurations);
    invokeConfigFn(registerDefinitions);

};

//module.exports = function (grunt) {
//
//    // load all grunt tasks
//    require('load-grunt-tasks')(grunt);
//
//    // Project configuration.
//    grunt.initConfig({
//        connect    : {
//            main: {
//                options: {
//                    hostname: '0.0.0.0',
//                    port    : 9001,
//                    base:'dist/'
//                }
//            },
//            dev: {
//                options: {
//                    hostname: '0.0.0.0',
//                    port    : 9001
//                    //base:'dist/'
//                }
//            }
//        },
//
//        watch      : {
//            main: {
//                options: {
//                    livereload       : true,
//                    livereloadOnError: false,
//                    spawn            : false
//                },
//                files  : [createFolderGlobs(['*.less', '*.html', 'app/*/*.js']), '!_SpecRunner.html', '!.grunt'],
//                tasks  : ['less','copy:avalon']
//                //all the tasks are run dynamically during the watch event handler
//            }
//        },
//        jshint     : {
//            main: {
//                options: {
//                    jshintrc: '.jshintrc'
//                },
//                src    : createFolderGlobs('src/*/*.js')
//            }
//        },
//        clean      : {
//            before: {
//                src: ['dist', 'temp']
//            },
//            after : {
//                src: ['temp']
//            }
//        },
//        less       : {
//            production: {
//                options: {},
//                files  : {
//                    'src/styles/app.css': ['app/less/*.less']
//                }
//            },
//            ngless:{
//                options: {
//                    compress: true,
//                    cleancss: true,
//                    optimization: 2,
//                    sourceMap: true
//                },
//                files: [{
//                    expand: true,
//                    src: ['app/**/*.less'],
//                    dest: './',
//                    ext: '.css'
//                }]
//            }
//        },
//        ngtemplates: {
//            main: {
//                options: {
//                    module : pkg.name,
//                    htmlmin: '<%= htmlmin.main.options %>'
//                },
//                src    : [
//                    //createFolderGlobs('*.html'),
//                    '!index.html',
//                    '!_SpecRunner.html'
//                ],
//                dest   : 'temp/templates.js'
//            }
//        },
//        copy       : {
//            main: {
//                files: [
//                    {
//                        src    : [
//                            'bower_components/mmRouter/avalon.mobile.js',
//                            'bower_components/mmRouter/mmRouter.js',
//                            'bower_components/mmRouter/mmState.js',
//                            'bower_components/mmRouter/mmPromise.js',
//                            'bower_components/mmRouter/mmHistory.js'
//                        ], dest: 'dist/avalon', filter: 'isFile',
//                        flatten: true,
//                        expand : true
//                    },
//                     {src:['src/styles/pages/tumblr-list/css/*'],dest:'dist/assets',filter:'isFile',
//                        flatten: true,
//                        expand:true
//                    },
//                    {src:['src/styles/pages/tumblr-list/css/iconfont/*'],dest:'dist/iconfont',filter:'isFile',
//                        flatten: true,
//                        expand:true
//                    },
//                    {src:['src/scripts/mmRequest.js'],dest:'dist/avalon',filter:'isFile',
//                        flatten: true,
//                        expand:true
//                    },
//                    {src:['app/views/*.html'],dest:'dist/',filter:'isFile'
//                        //flatten: true,
//                        //expand:true
//                    },
//                    {src:['app/controllers/**'],dest:'dist/avalon',filter:'isFile',
//                        flatten: true,
//                        expand:true
//                    },
//                    {src:['app/services/**'],dest:'dist/avalon',filter:'isFile',
//                        flatten: true,
//                        expand:true
//                    },
//                    {
//                        src:['app/less/**','app/partial/**','bower_components/fullpage.js/jquery.fullPage.css'],dest:'dist/',fulter:'isFile'
//                    },
//                    {
//                        src:['bower_components/jquery/dist/jquery.min.map'],dest:'dist/ngapp',filter:'isFile',
//                        flatten: true,
//                        expand:true
//                    },
//                    {
//                        src:['bower_components/**/*.js','bower_components/**/*.map','app/**/*.js','app/**/*.css'],
//                        dest:'dist/',
//                        filter:'isFile',
//                        expand:true
//
//                    }
//                ]
//            },
//            avalon:{
//                files:[
//                    {src:['app/controllers/**'],dest:'dist/avalon',filter:'isFile',
//                        flatten: true,
//                        expand:true
//                    },
//                    {src:['app/services/**'],dest:'dist/avalon',filter:'isFile',
//                        flatten: true,
//                        expand:true
//                    }
//                ]
//            }
//        },
//        dom_munger : {
//            read  : {
//                options: {
//                    read: [
//                        {selector: 'script[data-concat!="false"]', attribute: 'src', writeto: 'appjs'},
//                        {selector: 'link[rel="stylesheet"][data-concat!="false"]', attribute: 'href', writeto: 'appcss'}
//                    ]
//                },
//                src    : 'index.html'
//            },
//            update: {
//                options: {
//                    remove: ['script[data-remove!="false"]', 'link[data-remove!="false"]'],
//                    append: [
//                        {selector: 'body', html: '<script src="avalon/lib.full.js">' +
//                        '</script><script src="avalon/app.full.min.js"></script>'},
//                        {selector: 'head', html: '<link rel="stylesheet" href="app/less/certi.less" type="text/css"/><script src="http://cdn.bootcss.com/less.js/1.7.0/less.min.js"></script><link rel="stylesheet" href="app.full.min.css">'}
//                    ]
//                },
//                src    : 'index.html',
//                dest   : 'dist/index.html'
//            },
//            ngupdate:{
//                options:{
//                    remove:['script[data-remove!="false"]', 'link[data-remove!="false"]'],
//                    append:[
//                        {
//                            selector:'body',
//                            html:'<script src="ngapp/nglib.js" ></script>' +
//                            '<script src="ngapp/ngapp.js" ></script>'
//                        }
//                    ]
//
//                },   src    : 'retina.html',
//                dest   : 'dist/retina.html'
//            }
//        },
//        cssmin     : {
//            options:{
//                //美化代码
//                beautify: {
//                    //中文ascii化，非常有用！防止中文乱码的神配置
//                    ascii_only: true
//                }
//            },
//            main: {
//                src : ['temp/app.css', '<%= dom_munger.data.appcss %>',
//                    'src/styles/pages/tumblr-list/css/*.css',
//                    'src/styles/*.css',
//
//                ],
//                dest: 'dist/app.full.min.css'
//            }
//        },
//        concat     : {
//            main: {
//                src : ['<%= dom_munger.data.appjs %>', '<%= ngtemplates.main.dest %>',
//                    'bower_components/avalon/min/avalon.min.js'],
//                dest: 'dist/avalon/lib.full.js'
//            },
//            nglibconcat:{
//                src:[
//                    'bower_components/angular/angular.min.js',
//                    'bower_components/angular-animate/angular-animate.min.js',
//                    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
//                    'bower_components/angular-resource/angular-resource.min.js',
//                    'bower_components/lodash/dist/lodash.min.js',
//                    'bower_components/angular-lodash-module/angular-lodash-module.js',
//                    'bower_components/oclazyload/dist/ocLazyLoad.min.js',
//                    'bower_components/jquery/dist/jquery.min.js'
//                 ],
//                dest:'dist/ngapp/nglib.js'
//            },
//            ngappconcat:{
//                src:[
//                    'app/ngApp.js',
//                    //'app/partial/ad-partial/adCtrl.js',
//                    //'app/directive/imageonload.js',
//                    //'app/services/kaowoServices.js'
//                ],
//                dest:'dist/ngapp/ngapp.js'
//            }
//        },
//        ngAnnotate : {
//            main: {
//                src : 'temp/app.full.js',
//                dest: 'temp/app.full.js'
//            }
//        },
//        uglify     : {
//            main: {
//                src : [ 'app/controllers/tumblrCtrl.js'],
//                dest: 'dist/avalon/app.full.min.js'
//            },
//            avalon:{
//                src:['bower_components/mmRouter/avalon.js'],
//                dest:'dist/avalon/lib.full.js'
//            }
//
//        },
//        htmlmin    : {
//            main: {
//                options: {
//                    collapseBooleanAttributes    : true,
//                    collapseWhitespace           : true,
//                    removeAttributeQuotes        : true,
//                    removeComments               : true,
//                    removeEmptyAttributes        : true,
//                    removeScriptTypeAttributes   : true,
//                    removeStyleLinkTypeAttributes: true
//                },
//                files  : {
//                    'dist/index.html': 'dist/index.html',
//                    'dist/retina.html':'dist/retina.html'
//                }
//            },
//            nghtml:{
//                options: {
//                    collapseBooleanAttributes    : true,
//                    collapseWhitespace           : true,
//                    removeAttributeQuotes        : true,
//                    removeComments               : true,
//                    removeEmptyAttributes        : true,
//                    removeScriptTypeAttributes   : true,
//                    removeStyleLinkTypeAttributes: true
//                },
//                files: [{
//                    expand: true,
//                    src: ['app/**/*.html'],
//                    dest: 'dist/',
//                    ext: '.html'
//                }]
//            }
//
//        },
//        //Imagemin has issues on Windows.
//        //To enable imagemin:
//        // - "npm install grunt-contrib-imagemin"
//        // - Comment in this section
//        // - Add the "imagemin" task after the "htmlmin" task in the build task alias
//        // imagemin: {
//        //   main:{
//        //     files: [{
//        //       expand: true, cwd:'dist/',
//        //       src:['**/{*.png,*.jpg}'],
//        //       dest: 'dist/'
//        //     }]
//        //   }
//        // },
//        karma      : {
//            options     : {
//                frameworks: ['jasmine'],
//                files     : [  //this files data is also updated in the watch handler, if updated change there too
//                    '<%= dom_munger.data.appjs %>',
//                    'bower_components/angular-mocks/angular-mocks.js',
//                    createFolderGlobs('*-spec.js')
//                ],
//                logLevel  : 'ERROR',
//                reporters : ['mocha'],
//                autoWatch : false, //watching is handled by grunt-contrib-watch
//                singleRun : true
//            },
//            all_tests   : {
//                browsers: ['PhantomJS', 'Chrome', 'Firefox']
//            },
//            during_watch: {
//                browsers: ['PhantomJS']
//            }
//        }
//    });
//
//
//
//    grunt.registerTask('build', [
//        //'jshint',
//        'clean:before', 'less', 'dom_munger','dom_munger:ngupdate',
//        'ngtemplates',
//        'cssmin', 'concat', 'ngAnnotate',
//        'uglify',
//        //'uglify:lib',
//        'copy', 'htmlmin' ,'clean:after']);
//    grunt.registerTask('serve', ['dom_munger:read',
//        //'jshint',
//        'connect:main', 'watch']);
//    grunt.registerTask('dev', ['dom_munger:read',
//        //'jshint',
//        'connect:dev','cssmin', 'watch']);
//    //grunt.re
//    grunt.registerTask('test', ['dom_munger:read', 'karma:all_tests']);
//
//    grunt.event.on('watch', function (action, filepath) {
//        //https://github.com/gruntjs/grunt-contrib-watch/issues/156
//
//        var tasksToRun = [];
//
//        if (filepath.lastIndexOf('.js') !== -1 && filepath.lastIndexOf('.js') === filepath.length - 3) {
//
//            //lint the changed js file
//            grunt.config('jshint.main.src', filepath);
//            //tasksToRun.push('jshint');
//
//            //find the appropriate unit test for the changed file
//            var spec = filepath;
//            if (filepath.lastIndexOf('-spec.js') === -1 || filepath.lastIndexOf('-spec.js') !== filepath.length - 8) {
//                spec = filepath.substring(0, filepath.length - 3) + '-spec.js';
//            }
//
//            //if the spec exists then lets run it
//            if (grunt.file.exists(spec)) {
//                var files = [].concat(grunt.config('dom_munger.data.appjs'));
//                files.push('bower_components/angular-mocks/angular-mocks.js');
//                files.push(spec);
//                grunt.config('karma.options.files', files);
//                tasksToRun.push('karma:during_watch');
//            }
//        }
//
//        //if index.html changed, we need to reread the <script> tags so our next run of karma
//        //will have the correct environment
//        if (filepath === 'index.html') {
//            tasksToRun.push('dom_munger:read');
//        }
//
//        grunt.config('watch.main.tasks', tasksToRun);
//
//    });
//};
