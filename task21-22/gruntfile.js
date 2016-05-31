<<<<<<< HEAD
module.exports = function(grunt) {

require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: false,
        presets:['es2015']
      },
        dist: {
          files: [{
            expand: true,
            cwd: 'js/src', 
            src: ['*.js'],
            dest: 'js/dist',
            ext: '.js',
            exDot: 'first'
        }]
      }
    },
        watch: {
          babel: {
          files: 'js/src/*.js',
          tasks: ['babel'],
        },
      }
    });

  
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['babel']);
=======
module.exports = function(grunt) {

require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: false,
        presets:['es2015']
      },
        dist: {
          files: [{
            expand: true,
            cwd: 'js/src', 
            src: ['*.js'],
            dest: 'js/dist',
            ext: '.js',
            exDot: 'first'
        }]
      }
    },
        watch: {
          babel: {
          files: 'js/src/*.js',
          tasks: ['babel'],
        },
      }
    });

  
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['babel']);
>>>>>>> 97f5991d9fb678b9c1d7704b696a77ad568a530e
};