
define(["backbone.app", "app/collections/common"], function( APP, Common ){

	var Parent = Common;

	var Collection = Parent.extend({

		name: "collection",

		options: {
			autofetch: true
		}

		//url: ""

	});

	// save in the global namespace
	APP.Collections.Collection = Collection;

	return Collection;

});
