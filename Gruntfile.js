module.exports = function (grunt) {
<<<<<<< HEAD
   grunt.initConfig({
        cssmin: {  
              'rectangle.min.css': 'rectangle.css'
            }        
  });

    grunt.loadNpmTasks('grunt-contrib-cssmin');

      grunt.registerTask('default', ['cssmin']); 
=======
  grunt.initConfig({
    htmlmin: {
      options: {
                collapseWhitespace: true,
          preserveLineBreaks: false
          
      },
  files: {
            src: './index.html',
          dest: 'dist/index.html'
          
  }
      
    }
               
  });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');

      grunt.registerTask('default', ['htmlmin']); 
>>>>>>> origin/cssmin

};
