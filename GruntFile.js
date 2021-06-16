module.exports = function(grunt){

    grunt.config.init({
        concat : {
            js : {
                src : ["js/menu.js", "js/JSONfetch.js","js/imageSlider.js"],
                dest : "index.js",
            },
        },

        watch : {
            js : {
                files : ["js/*.js"],
                tasks : ["concat"],
            },
        },

        

        
      });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

}