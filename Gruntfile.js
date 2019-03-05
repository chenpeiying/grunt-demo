module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: {
                   'css/layout.css': 'less/layout.css'        
        }              
      }                  
    }       
  });
    grunt.loadNpmTasks('grunt-contrib-less');
      grunt.registerTask('default', ['less']);
};

