module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                outputStyle: 'compressed',
                includePaths: [
                    'src/css',
                    'libs'
                ]
            },
            dist: {
                files: {
                    'target/filemanager.min.css': 'src/css/filemanager.css'
                }
            }
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            main: {
                files: {
                    'target/filemanager.min.js': ['src/js/filemanager.js'],
                    'target/libs-main.js': [
                        'libs/jquery-1.11.3.min.js',
                        'libs/jquery-ui/jquery-ui.js',
			'libs/sammy.min.js',
                        'libs/knockout-3.4.0.js',
                        'libs/toast/lib/toast.min.js',
                        'libs/cldrjs/cldr.js',
                        'libs/cldrjs/cldr/event.js',
                        'libs/cldrjs/cldr/supplemental.js',
                        'libs/globalizejs/globalize.js',
                        'libs/globalizejs/globalize/number.js',
                        'libs/globalizejs/globalize/date.js',
                        'libs/purl/purl.js'
                    ]
                }
            }
        }

    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');

    // default tasks
    grunt.registerTask('default', ['uglify', 'sass']);
};
