module.exports = function(grunt){

    grunt.config.init({
        concat : {
            css: {
                src: ["styles/core.scss","styles/mobile.scss", "styles/desktop.scss"],
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