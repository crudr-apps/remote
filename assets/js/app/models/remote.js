define(["backbone.app", "app/models/common"], function( APP, Common ){

	var Parent = Common;

	var Model = Parent.extend({

		name: "remote",

		backend: 'test',

		defaults: {
			//"text": {}
		}

	});

	// save in the global namespace
	APP.Models.Remote = Model;

	return Model;

});
