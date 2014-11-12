define(["backbone.app", "app/models/common"], function( APP, Common ){

	var Parent = Common;

	var Model = Parent.extend({

		defaults: {
			"text": {}
		}

	});

	// save in the global namespace
	APP.Models.Model = Model;

	return Model;

});