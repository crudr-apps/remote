define(["backbone"], function( Backbone ){

	var Parent = Backbone.Model;

	return Parent.extend({

		url: function(){
			return (config.isDev)
				? "/test/data/locale.json"
				: "/test/data/locale.json"; //change this when the server has a is updated
				//: "/api/locale/"+ this.options.lang;
		},

		options: {
			autofetch: true,
			lang: "en"
		},

		defaults: {
			"header": {}
		},

		parse: function( data ){
			_.log( "locale", data );
			window.locale = data;
			return data;
		}

	});

});