define(["backbone.app", "app/views/common"], function( APP, Common ){

	var Parent = Common;

	var View = Parent.extend({

		options: {

		}
	});

	// save in the global namespace
	APP.Views.Default = View;

	return View;

});
