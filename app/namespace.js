/**
 * This file defines the application namespace, module definition factory,
 * application state, events and the main router (or front controller).
 *
 * @since 1.0
 */
this.Joomla = {
    /**
	 * Function to help code organization by breaking up logical components into
	 * dynamically loaded modules.
	 *
	 * @since 1.0
	 */
    module : function() {
	    // Internal module cache.
	    var modules = {};

	    // Create a new module reference scaffold or load an existing module.
	    return function(name) {
		    // If this module has already been created, return it.
		    if (modules[name]) {
			    return modules[name];
		    }

		    // Create a module and save it under this name
		    return modules[name] = {
			    Views : {}
		    };
	    };
    }(),

    /**
	 * Function to get a template by name.
	 *
	 * @param string
	 * @param function
	 * @param object
	 *
	 * @return void
	 *
	 * @since 1.0
	 */
    fetchTemplate : function(path, done, args) {

	    // Make sure Handlebars.templates exists.
	    Handlebars.templates = Handlebars.templates || {};

	    // If the template already exists lets just use it.
	    if (Handlebars.templates[path]) {

		    // Execute the callback on the template.
		    done(Handlebars.templates[path], args);
	    } else {

		    // Attempt to load the template asynchronously.
		    this.loadTemplate(path, done, args);
	    }
    },

    /**
	 * Function to asynchronously load a template.
	 *
	 * @param string
	 * @param function
	 * @param object
	 *
	 * @return void
	 *
	 * @since 1.0
	 */
    loadTemplate : function(path, done, args) {

	    // Make sure Handlebars.templates exists.
	    Handlebars.templates = Handlebars.templates || {};

	    // Fetch it asynchronously if not available locally.
	    return $.get('tmpl/' + path + '.html', function(contents) {

		    // Attempt to compile the template.
		    if (Handlebars.compile) {
			    var tmpl = Handlebars.compile(contents);
			    Handlebars.templates[path] = tmpl;

			    // Execute the callback on the template.
			    done(tmpl, args);
		    }
	    });
    },

    /**
	 * Keep instances namespaced under an app object which extends
	 * Backbone.Events.
	 */
    app : _.extend({}, Backbone.Events)
};
