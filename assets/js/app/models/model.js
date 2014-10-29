define(["app/models/common", "backbone.app"], function( Common, APP ){

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