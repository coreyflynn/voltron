module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // grab info from the package.json file
    pkg: grunt.file.readJSON('package.json'),

    // configure the compilation of handlebars templates
    handlebars: {
      compile: {
        options: {
          namespace: "BaristaTemplates",
          processName: function(path) {
            parts = path.split('/');
            fname = parts[parts.length - 1].replace('.handlebars','');
            return fname;
          }
        },
        files: {
          "templates/barista_templates.js": ["templates/*.handlebars"]
        }
      }
    },

    // configure concatination of files
    concat: {
      options: {
        separator: '\n'
      },
      js_barista_datasets: {
        src: ['source/datasets/**/*.js','!source/datasets/datasets.main.js'],
        dest: 'source/datasets/datasets.main.js'
      },
      js_barista_utils: {
        src: ['source/utils/**/*.js','!source/utils/utils.main.js'],
        dest: 'source/utils/utils.main.js'
      },
      js_barista_models: {
        src: ['source/models/**/*.js','!source/models/models.main.js'],
        dest: 'source/models/models.main.js'
      },
      js_barista_views: {
        src: ['source/views/BaristaBaseView.js','source/views/**/*.js','!source/views/views.main.js'],
        dest: 'source/views/views.main.js'
      },
      js_barista_collections: {
        src: ['source/collections/**/*.js','!source/collections/collections.main.js'],
        dest: 'source/collections/collections.main.js'
      },
      js_barista: {
        src: ['source/preamble.js',
              'source/datasets/datasets.main.js',
              'source/utils/utils.main.js',
              'source/models/models.main.js',
              'source/collections/collections.main.js',
              'source/views/views.main.js',
              'source/tile.js',
              'source/afterword.js'
              ],
        dest: 'source/barista.js'
      },
      js_external: {
        src: ['external_source/jquery-1.9.1.min.js',
              'external_source/underscore-min.js',
              'bower_components/bootstrap/dist/js/bootstrap.min.js',
              'external_source/d3.v3.min.js',
              'external_source/backbone-min.js',
              'external_source/backgrid.min.js',
              'external_source/chardinjs.min.js',
              'external_source/d3.parcoords.js',
              'external_source/FileSaver.min.js',
              'external_source/handlebars_runtime.js',
              'external_source/intro.min.js',
              'external_source/rgbcolor.js',
              'external_source/canvg.js',
              'external_source/Blob.js',
              'external_source/canvas-toBlob.js',
              'external_source/typeahead.min.js',
              'bower_components/hogan/web/builds/2.0.0/hogan-2.0.0.js',
              'bower_components/jquery.cookie/jquery.cookie.js',
              'bower_components/offline/offline.min.js'
              ],
        dest: 'external_source/external.js'
      },
      js_barista_main_no_external: {
        src: ['templates/barista_templates.js',
              'source/barista.js'],
        dest: 'source/barista.main.js'
      },
      js_barista_main_plus_external: {
        src: ['external_source/external.js',
              'templates/barista_templates.js',
              'source/barista.js'],
        dest: 'barista.main.js'
      },
      js_barista_main_min: {
        src: ['external_source/external.min.js',
              'source/<%= pkg.name %>.main.min.js'],
        dest: '<%= pkg.name %>.main.min.js'
      },
    },

    // configure uglification of files
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> */\n'
      },
      external: {
        src: ['external_source/external.js'],
        dest: 'external_source/external.min.js'
      },
      main: {
        src: ['source/barista.main.js'],
        dest: 'source/<%= pkg.name %>.main.min.js'
      }
    },

    // configure concatination and minification of css files
    cssmin: {
      external: {
        files: {
          'css/external.css': ['css/external/backgrid.min.css',
                                  'css/external/d3.parcoords.css',
                                  'css/external/introjs.min.css',
                                  'bower_components/bootstrap/dist/css/bootstrap.min.css',
                                  'css/external/typeahead.js-bootstrap.css',
                                  'bower_components/offline/themes/offline-theme-default.css',
                                  'bower_components/offline/themes/offline-language-english.css',
                              ]
        }
      },
      internal: {
        files: {
          'css/internal.css': ['css/internal/barista.css']
        }
      },
      main: {
        files: {
          '<%= pkg.name %>.main.min.css': ['css/external.css','css/internal.css']
        }
      }
    },

    // configure the generation of docs with groc
    groc: {
      javascript: ["source/**/*.js","README.md"],
      options: {
        index: 'README.md',
        strip: 'source',
        except: ['source/**/*.main.js',
                'source/preamble.js',
                'source/barista.main.js',
                'source/barista.main.min.js',
                'source/templates/*',
                'source/tile.js']
      }
    },

    // configure the generation of docs with docco
    docco: {
      options: {
        layout: "parallel",
        output: "foo/"
      },
      all:{
        files:{
          src: ["source/**/*.js"],
          except: ['source/**/*.main.js','source/barista.js']
        }
      }
    },

    // set up grunt to run the default patern when any js files change
    watch: {
      js: {
        files: ['barista/**/*.js'],
        tasks: ['concat','uglify','groc']
      },
      css: {
        files: ['css/internal/**/*.css'],
        tasks: ['cssmin']
      }
    }
  });

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Load the plugin that provides the "groc" task.
  grunt.loadNpmTasks('grunt-groc');

  // Load the plugin that provides the "groc" task.
  grunt.loadNpmTasks('grunt-docco-multi');

  // Load the plugin that provides the "handlebars" task.
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // load the plugin that provides the "watch" task
  grunt.loadNpmTasks('grunt-contrib-watch');

  // nodoc task
  grunt.registerTask('nodoc', ['handlebars','concat_internal','uglify:main','concat_main','cssmin']);

  // task to concat and minimized external sources
  grunt.registerTask('build_external',['concat:js_external','uglify:external']);

  // standard internal concat task (does not concat external)
  grunt.registerTask('concat_internal', ['concat:js_barista_datasets',
                                      'concat:js_barista_utils',
                                      'concat:js_barista_models',
                                      'concat:js_barista_views',
                                      'concat:js_barista_collections',
                                      'concat:js_barista',
                                      'concat:js_barista_main_no_external',
                                      'concat:js_barista_main_plus_external']);

  // concat_main task (combines external and internal minimized code)
  grunt.registerTask('concat_main',['concat:js_barista_main_min']);

  // Default task(s).
  grunt.registerTask('default', ['handlebars','concat_internal','uglify:main','concat_main','cssmin','groc']);



};
