module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		requirejs: {
			compile: {
				options: {
					baseUrl: './src',
					dir: './build',
					paths: {
						libs: "js/libs",
						app: "js/apps/app",
						widgets: "js/widgets",
						factories:"js/factories",
						services: "js/services",
						directives:"js/directives",
						filters:"js/filters",
						templates: "templates",
						angular: 'empty:',
						jQuery: 'empty:'
					},
					optimize: "none",
					// license
					wrap: {
						startFile: "license.js"
					},
					modules: [{
						name: "boot",
						exclude: [
							"jQuery",
							"angular",

							'css!css/bootstrap/css/bootstrap.min.css',
							'css!css/bootstrap/css/bootstrap-responsive.min.css'
						]
					}]
				}
			}
		},

		replace: {
			dist: {
				options: {
					variables: {
						"version": 'v=<%= pkg.version %>'
					}
				},
				files: [
					{expand: true, flatten: true, src: ['build/boot.js'], dest: 'build/'}
				]
			}
		},

		clean: {
			foo: {
				src: ['build/**/*']
			}
		},
		qunit: {
			files: ['test/**/*.html']
		},
		jshint: {
			// define the files to lint
			files: ['Gruntfile.js',
				'src/js/apps/**/*.js',
				'src/js/directives/**/*.js',
				'src/js/factories/**/*.js',
				'src/js/services/**/*.js',
				'src/js/widgets/**/*.js',
				'test/**/*.js'
			],
			// configure JSHint (documented at http://www.jshint.com/docs/)
			options: {
				"asi": true,	// semicolons
				"expr": true,	// Expected an assignment or function call and instead saw an expression
				"evil": true,	// eval
				// more options here if you want to override JSHint defaults
				globals: {
					$: true,
					jQuery: true,
					angular: true,
					console: true,
					document: true
				}
			}
		},
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint'/*, 'qunit'*/]
		}
	});

	// Load the plugin
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// this would be run by typing "grunt test" on the command line
	grunt.registerTask('test', ['jshint'/*, 'qunit'*/]);

	// this would be run by typing "grunt build" on the command line
	grunt.registerTask('build', ['requirejs', 'replace']);

	// Default task(s).
	grunt.registerTask('default', ['test', 'build']);

};