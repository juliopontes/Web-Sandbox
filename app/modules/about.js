/**
 * This file defines the About module.
 *
 * @since 1.0
 */
(function(About) {

	About.Model = Backbone.Model.extend({ /* ... */});
	About.Collection = Backbone.Collection.extend({ /* ... */});
	About.Router = Backbone.Router.extend({ /* ... */});

	// This will fetch the subnav template and render it.
	About.Views.Subnav = Backbone.View.extend({
	    template : "about/subnav",

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
	About.Views.Sidebar = Backbone.View.extend({
	    template : "about/sidebar",

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
	About.Views.Content = Backbone.View.extend({
	    template : "about/content",

	    render : function(done) {
		    var view = this;

		    // Fetch the template, render it to the View element and call done.
		    Joomla.fetchTemplate(this.template, function(tmpl) {
			    view.el.innerHTML = tmpl();

			    done(view.el);
		    });
	    }
	});

})(Joomla.module("about"));
