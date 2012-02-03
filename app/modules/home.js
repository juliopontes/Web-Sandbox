/**
 * This file defines the Home module.
 *
 * @since 1.0
 */
(function(Home) {

	Home.Model = Backbone.Model.extend({ /* ... */});
	Home.Collection = Backbone.Collection.extend({ /* ... */});
	Home.Router = Backbone.Router.extend({ /* ... */});

	// This will fetch the subnav template and render it.
	Home.Views.Subnav = Backbone.View.extend({
	    template : "home/subnav",

	    render : function(done) {
		    var view = this;

		    // Fetch the template, render it to the View element and call done.
		    Joomla.fetchTemplate(this.template, function(tmpl) {
			    view.el.innerHTML = tmpl();

			    done(view.el);
		    });
	    }
	});

	// This will fetch the side bar template and render it.
	Home.Views.Sidebar = Backbone.View.extend({
	    template : "home/sidebar",

	    render : function(done) {
		    var view = this;

		    // Fetch the template, render it to the View element and call done.
		    Joomla.fetchTemplate(this.template, function(tmpl) {
			    view.el.innerHTML = tmpl();

			    done(view.el);
		    });
	    }
	});

	// This will fetch the content template and render it.
	Home.Views.Content = Backbone.View.extend({
	    template : "home/content",

	    render : function(done) {
		    var view = this;

		    // Fetch the template, render it to the View element and call done.
		    Joomla.fetchTemplate(this.template, function(tmpl) {
			    view.el.innerHTML = tmpl();

			    done(view.el);
		    });
	    }
	});

})(Joomla.module("home"));
