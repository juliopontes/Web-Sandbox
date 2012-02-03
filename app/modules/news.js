/**
 * This file defines the News module.
 *
 * @since 1.0
 */
(function(News) {

	News.Model = Backbone.Model.extend({ /* ... */});
	News.Collection = Backbone.Collection.extend({ /* ... */});
	News.Router = Backbone.Router.extend({ /* ... */});

	// This will fetch the subnav template and render it.
	News.Views.Subnav = Backbone.View.extend({
	    template : "news/subnav",

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
	News.Views.Sidebar = Backbone.View.extend({
	    template : "news/sidebar",

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
	News.Views.Content = Backbone.View.extend({
	    template : "news/content",

	    render : function(done) {
		    var view = this;

		    // Fetch the template, render it to the View element and call done.
		    Joomla.fetchTemplate(this.template, function(tmpl) {
			    view.el.innerHTML = tmpl();

			    done(view.el);
		    });
	    }
	});

})(Joomla.module("news"));
