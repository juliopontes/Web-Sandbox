/**
 * This file defines the Breadcrumbs module.
 *
 * @since 1.0
 */
(function(Breadcrumbs) {
	/**
	 * Breadcrumbs model for managing the application path state.
	 *
	 * @since 1.0
	 */
	Breadcrumbs.Model = Backbone.Model.extend({
	    getContainer : function() {
		    var path = this.get('path');

		    return path.slice(-2)[0];
	    },

	    getCurrent : function() {
		    var path = this.get('path');

		    return path.slice(-1)[0];
	    },

	    getPath : function() {
		    return this.get('path');
	    },

	    setPath : function(path) {
		    this.set('path', path);
	    }
	});

	Breadcrumbs.Views.Top = Backbone.View.extend({
	    // Set the container element for the view.
	    el : $('#crumbs-top'),

	    templateActive : "breadcrumbs/active",
	    templateInactive : "breadcrumbs/inactive",

	    // Initialize the view.
	    initialize : function() {
		    this.model.bind('change', this.render, this);
	    },

	    // Render the view.
	    render : function(event) {
		    var view = this;
		    var path = this.model.getPath();
		    var tmp = '';
		    var len = path.length;

		    for (i = 0; i < len; i++) {
			    var t = (i == (len - 1) ? view.templateActive : view.templateInactive);
			    tmp += Handlebars.templates[t](path[i]);
		    }

		    view.$el.html(tmp);

		    return this;
	    }
	});
})(Joomla.module("breadcrumbs"));
