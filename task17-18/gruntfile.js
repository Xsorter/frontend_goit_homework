<<<<<<< HEAD
module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ' '
      },
        basic: {
        src: ['js/src/*.js'],
        dest: 'js/dist/main.js',
      },
        extras: {
        src: ['css/src/*.css'],
        dest: 'css/dist/main.css',
      }
    },
    uglify: {
      my_target: {
        files: {
        'js/dist/output.min.js': 'js/dist/main.js',
      }
    }
  },
    cssmin: {
      target: {
        files: {
        'css/dist/main.min.css': 'css/dist/main.css',
      }
    }
  },
    sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',  //folder
        src: ['*.scss'],
        dest: 'styles',  //folder with css
        ext: '.css'
      }]
    }
  },
    watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['src/sass/*.sass'],
      tasks: ['sass'],
    }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'sass']);
=======
module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ' '
      },
        basic: {
        src: ['js/src/*.js'],
        dest: 'js/dist/main.js',
      },
        extras: {
        src: ['css/src/*.css'],
        dest: 'css/dist/main.css',
      }
    },
    uglify: {
      my_target: {
        files: {
        'js/dist/output.min.js': 'js/dist/main.js',
      }
    }
  },
    cssmin: {
      target: {
        files: {
        'css/dist/main.min.css': 'css/dist/main.css',
      }
    }
  },
    sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',  //folder
        src: ['*.scss'],
        dest: 'styles',  //folder with css
        ext: '.css'
      }]
    }
  },
    watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['src/sass/*.sass'],
      tasks: ['sass'],
    }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'sass']);
>>>>>>> 97f5991d9fb678b9c1d7704b696a77ad568a530e
};