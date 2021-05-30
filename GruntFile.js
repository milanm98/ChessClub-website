module.exports = function(grunt){

    grunt.config.init({
        concat : {
            css: {
                src: ["styles/_core.scss","styles/_mobile.scss", "styles/_desktop.scss"],
                dest : "index.scss",
            },
        },

        watch : {
            css : {
                files: ["styles/*.scss"],
                tasks : ["concat"],
            },
        },

        

        
      });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

}