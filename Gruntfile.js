module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
                    'css/style-no-prefix.css': 'scss/style.scss'
				}
			}
		},
		watch: {
			sass: {
                files: ['scss/*.scss'],
				tasks: ['sass', 'postcss']
			}

		},


		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'css/*.css',
                        '*.aspx',
                        '*.Master'
					]
				},
				options: {
					watchTask: true,
                    proxy: 'http://localhost:64599'
				}
			}
		},
		postcss: {
			options: {
		
				processors: [
					require('autoprefixer')({
						browsers: ['last 2 versions', 'ie > 9', 'Firefox > 50', 'Safari > 4']
					})
				]
			},
			dist: {
                src: 'css/style-no-prefix.css',
                dest: 'css/style.css'
			}
		} //postcss
	});

	//register tasks
    grunt.loadNpmTasks('grunt-sass');

    grunt.loadNpmTasks('grunt-postcss');

    grunt.loadNpmTasks('grunt-browser-sync');

	grunt.loadNpmTasks('grunt-contrib-watch');



	//default task
	grunt.registerTask('default', ['sass', 'postcss', 'browserSync', 'watch']);
};