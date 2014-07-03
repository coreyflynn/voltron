module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        vulcanize: {
            default: {
                options: {},
                files: {
                    'voltron.html': 'build.html'
                },
            },
        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-vulcanize');

    // Default task(s).
    grunt.registerTask('default', ['vulcanize']);

};
