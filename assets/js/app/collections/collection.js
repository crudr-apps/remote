
define(["app/collections/common"], function( Common ){

	var Parent = Common;

	return Parent.extend({

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

});
