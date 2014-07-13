define(["backbone", "backbone.app"], function( Backbone, APP ){

	var View = APP.View.extend({

		options: {
		}

	});

	// save in the global namespace
	APP.Views.Common = View;

	return View;

});
