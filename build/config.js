/**
 * This is the project build configuration file. Make adjustments to the
 * ordering and processing of JS/CSS files here.
 * 
 * @since    1.0
 */
config.init({

	lint : {
		files : [ "build/config.js", "app/**/*.js" ]
	},

	concat : {
		// The core library files
		"dist/debug/js/libs.js" : [ "assets/js/json2.js", "assets/js/jquery.js", "assets/js/underscore.js", "assets/js/backbone.js",
				"assets/js/prettify.js", "assets/js/bootstrap.js" ],

		// Application files
		"dist/debug/js/app.js" : [ "app/namespace.js", "app/modules/**/*.js", "app/index.js" ],

		// Your CSS
		"dist/debug/css/style.css" : [ "assets/css/bootstrap.css", "assets/css/fluid-grid.css", "assets/css/bootstrap-responsive.css",
				"assets/css/prettify.css" ]
	},

	jst : {
		"dist/debug/js/templates.js" : [ "assets/tmpl/**/*.html" ]
	},

	copy : {
		"assets/ico/**/*.*" : {src: "assets/ico", dest: ["dist/debug/ico", "dist/release/ico"]},
		"assets/img/**/*.*" : {src: "assets/img", dest: ["dist/debug/img", "dist/release/img"]},
		"assets/tmpl/**/*.html" : {src: "assets/tmpl", dest: ["dist/debug/tmpl", "dist/release/tmpl"]},
		"index.html" : {src: "", dest: ["dist/debug/", "dist/release/"]}
	},

	min : {
		"dist/release/js/libs.js" : [ "dist/debug/js/libs.js" ],
		"dist/release/js/app.js" : [ "dist/debug/js/app.js" ],
		"dist/release/js/templates.js" : [ "dist/debug/js/templates.js" ]
	},

	mincss : {
		"dist/release/css/style.css" : [ "dist/debug/css/style.css" ]
	},

	watch : {
		files : [ "assets/**/*", "app/**/*" ],
		tasks : "lint:files concat jst",

		min : {
			files : [ "assets/**/*", "app/**/*" ],
			tasks : "default"
		}
	},

	clean : {
		folder : "dist/"
	}

});

// Run the following tasks...
task.registerTask("default", "clean lint:files concat jst min mincss copy");
