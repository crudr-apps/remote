
define(["backbone.app", "app/collections/common"], function( APP, Common ){

	var Parent = Common;

	var Collection = Parent.extend({

		name: "collection",

		//url: ""

		options: {
			autofetch: true
		},

		parse: function( data ){
			_.log( this.name, data );
			return data;
		}


	});

	// save in the global namespace
	APP.Collections.Collection = Collection;

	return Collection;

});
