module.exports = function(grunt){
  grunt.initConfig({
    sprite:{
      all:{
        src:'images/*.png',
        dest:'dist/sprites.png',
        destCss:'dist/sprites.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-spritemith');

  grunt.registerTask('default',['sprite']);
};
