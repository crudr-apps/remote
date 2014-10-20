define(["app/views/common", "backbone.app"], function( Common, APP ){

	var Parent = Common;

	var View = Parent.extend({

		options: {

		}
	});

	// save in the global namespace
	APP.Views.Default = View;

	return View;

});
