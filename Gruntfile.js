module.exports = function(grunt) {
	grunt.initConfig({

		jshint: {
			all: ['public/app/logic/**/*.js']
		},

		sass: {
		    dist: {
		    	options: {
		    		style: 'expanded'
		    	},
		    	files: {
		    		'public/app/styles/main.css': 'public/app/styles/main.scss',
		    	}
		    }
		},

		cssmin: {
			build: {
				files: {
					'public/app/styles/style.min.css' : 'public/app/styles/style.css'
				}
			}
		},

		watch: {
			css: {
				files: ['public/app/styles/**/*.scss'],
				tasks: ['sass']
			}
		},

		nodemon: {
			dev: {
				script: 'server.js'
			}
		},

		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			tasks: ['nodemon', 'watch']
		}
	});

	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');


	grunt.registerTask('default', ['sass', 'cssmin', 'jshint', 'concurrent']);
};