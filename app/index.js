/**
 * This file initializes the application and kicks off execution after the DOM
 * is ready.
 *
 * @since 1.0
 */
jQuery(function($) {
	// Create a short variable to the application instance.
	var J = Joomla.app;

	/**
	 * Main application router definition. This object serves as the front
	 * controller for the entire application, capturing the route changes and
	 * setting up the environment for the application to respond.
	 *
	 * @since 1.0
	 */
	var Router = Backbone.Router.extend({
	    /**
		 * Route map definition.
		 */
	    routes : {
	        "" : "showHome",
	        "news" : "showNews",
	        "about" : "showAbout"
	    },

	    /**
		 * Router initialization function. The default case simply sets up the
		 * application path model and instantiates the breadcrumbs views.
		 *
		 * @since 1.0
		 */
	    initialize : function() {
		    // Load the breadcrumbs module.
		    var Breadcrumbs = Joomla.module("breadcrumbs");

		    // Instantiate a "static" path model for the application.
		    J.Path = new Breadcrumbs.Model();

		    // Go ahead and wire up the views.
		    new Breadcrumbs.Views.Top({
			    model : J.Path
		    });
	    },

	    /**
		 * Function to handle displaying the home page.
		 *
		 * @since 1.0
		 */
	    showHome : function() {
		    // Load the home module.
		    var Home = Joomla.module("home");

		    // Set the application path.
		    J.Path.setPath([ {
		        text : 'Home',
		        route : '#'
		    } ]);

		    var subnav = new Home.Views.Subnav();
		    var sidebar = new Home.Views.Sidebar();
		    var content = new Home.Views.Content();

		    // Render the main window.
		    this.renderMain(subnav, sidebar, content);
	    },

	    /**
		 * Function to handle displaying the news.
		 *
		 * @since 1.0
		 */
	    showNews : function() {
		    // Load the news module.
		    var News = Joomla.module("news");

		    // Set the application path.
		    J.Path.setPath([ {
		        text : 'Home',
		        route : '#'
		    }, {
		        text : 'News',
		        route : '#news'
		    } ]);

		    var subnav = new News.Views.Subnav();
		    var sidebar = new News.Views.Sidebar();
		    var content = new News.Views.Content();

		    // Render the main window.
		    this.renderMain(subnav, sidebar, content);
	    },

	    /**
		 * Function to handle displaying the about page.
		 *
		 * @since 1.0
		 */
	    showAbout : function() {
		    // Load the about module.
		    var About = Joomla.module("about");

		    // Set the application path.
		    J.Path.setPath([ {
		        text : 'Home',
		        route : '#'
		    }, {
		        text : 'About',
		        route : '#about'
		    } ]);

		    var subnav = new About.Views.Subnav();
		    var sidebar = new About.Views.Sidebar();
		    var content = new About.Views.Content();

		    // Render the main window.
		    this.renderMain(subnav, sidebar, content);
	    },

	    /**
		 * Function to render the three main panes of the page.
		 *
		 * @since 1.0
		 */
	    renderMain : function(subnav, sidebar, content) {
		    // Attach the subnav to the DOM.
		    subnav.render(function(el) {
			    $("#page-nav").html(el);
		    });

		    // Attach the sidebar to the DOM.
		    sidebar.render(function(el) {
			    $("#page-banner").html(el);
		    });

		    // Attach the content to the DOM.
		    content.render(function(el) {
			    $("#page-content").html(el);
		    });
	    }
	});

	// Instantiate the main router for the application.
	J.router = new Router();

	// Trigger the initial route and enable HTML5 History API support
	Backbone.history.start({
		pushState : true
	});

	/**
	 * All navigation that is relative should be passed through the navigate
	 * method, which is processed by the router. If the link has a data-bypass
	 * attribute, bypass the delegation completely.
	 */
	$(document).on("click", "a:not([data-bypass])", function(e) {
		// Get the anchor href and protcol
		var href = $(this).attr("href");
		var protocol = this.protocol + "//";

		// Ensure the protocol is not part of URL, meaning it's relative.
		if (href && href.slice(0, protocol.length) !== protocol) {
			// Ensure the link will not cause a page refresh.
			e.preventDefault();

			/**
			 * This uses the default router defined above, and not any
			 * sub-routers that might be placed in modules. To have this work
			 * globally you can change the following line to:
			 * Backbone.history.navigate(href, true);
			 */
			J.router.navigate(href, true);
		}
	});
});
