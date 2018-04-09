module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'css/style.css': 'scss/style.scss'
				}
			}
		},
		watch: {
			sass: {
				files : ['scss/*.scss'],
				tasks : ['sass']
			},

		},

		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'css/*.css',
						'*.html'
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: './'
					}
				}
			}
		}
	});

	//register tasks

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	//default task
	grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
};
