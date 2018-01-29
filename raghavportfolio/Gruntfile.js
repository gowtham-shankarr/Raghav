module.exports = function(grunt){
   // configurations

   grunt.initConfig ({
        concat: {
          js: {
              src: ['assets/js/*.js'],
              dest: 'builds/scripts.js'
          },
          css: {
               src: ['assets/css/*.css'],
               dest: 'builds/style.css'
          }
        },
        sass: {
          build: {
              files: [{
                src: 'assets/css/*.scss',
                dest: 'assets/css/*.css'
              }]
          }
        },
        sass: {
                dist: {
                  files: {
                    'assets/css/home.css' : 'assets/css/home.scss',
                    'assets/css/work.css' : 'assets/css/work.scss',
                    'assets/css/style.css' : 'assets/css/style.scss',
                  }
                }
            },
        // Automate CSS and JS 
        watch: {
           js:{
             files: ['assets/js/*.js'],
             tasks: ['concat:js']
           },
           css:{
            files: 'assets/css/**/*.css',
            tasks: ['sass']
           },
            sass: {
                dist: {
                  files: {
                    'assets/css/home.css' : 'assets/css/home.scss'
                  }
                }
            }
        },
        // Automatically reload CSS in the browser
         browserSync: {
             default_options: {
              bsFiles: {
                src: [
                  "assets/css/*.css",
                  "assets/js/*.css",
                  "assets/jquery/*.js",
                  "*.html"
                ]
              },
             options: {
              watchTask: true,
              server: {
                baseDir: "./"
              }
             }
           }
         },

   });

   // load Plugins
     // grunt.loadNPMTasks('')

     grunt.loadNpmTasks('grunt-contrib-concat');
     grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-browser-sync');


   // Register Tasks
     // grunt.registerTask('concat-js', ['concat:js']);
     // grunt.registerTask('concat-css', ['concat:css']);
     grunt.registerTask('default', ['concat', 'watch', 'sass', 'browserSync']);
   // Example for running tasks
     // grunt.registerTask('run', function(){
     //    console.log('I am running');
     // });

     // grunt.registerTask('sleep', function(){
     //    console.log('I am sleeping');
     // });

     // grunt.registerTask('all', ['run', 'sleep']);
};