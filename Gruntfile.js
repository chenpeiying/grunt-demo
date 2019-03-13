module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      js: {
                src: ['rectangle.js', 'rectangle.css','index.html'],
          dest: 'dist/bundle.js'
          
      }
              
    }
              
  });

    grunt.loadNpmTasks('grunt-contrib-concat');

      grunt.registerTask('default', ['concat']);

};
