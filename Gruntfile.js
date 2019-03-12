module exports = function(grunt){
  grunt.initConfig({
    htmlmin:{
      devolopment:{
        files:{
          'css/layout.css':'less/layout.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTasks('default',[htmlmin]);
};
