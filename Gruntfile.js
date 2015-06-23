module.exports = function(grunt) {
	grunt.initConfig({

		jshin: {
			all: ['public/app/logic/**/*.js']
		},

		sass: {
			dist: {
				options: {
					style: 'expanded'
				}
			},
			files: {
				'main.css' : 'main.scss'
			}
		}

		nodemon: {
			dev: {
				script: 'server.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grund-contrib-sass');


	grunt.registerTask('default', ['nodemon']);
};