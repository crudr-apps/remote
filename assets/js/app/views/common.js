define(["backbone.app"], function( APP ){

	var View = APP.View.extend({

		options: {
		}

	});

	// save in the global namespace
	APP.Views.Common = View;

	return View;

});
