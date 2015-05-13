/**
 * Created by jyo on 15-3-26.
 */
module.exports = function (grunt) {



    grunt.config.set('clean',{
        'ngapp-before': {
            //src: ['dist/ngapp','dist/app','dist/avalon' ,'temp']
            src: ['dist/ngapp','dist/app','temp']
        },
        'spapp-before':{
            src: ['dist/spApp', 'temp']
        },
        'share-before':{
            src:['dist/share','temp']
        },
        after : {
            src: ['temp']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
