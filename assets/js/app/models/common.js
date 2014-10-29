define(["underscore", "backbone.app"], function( _, APP ){

	var Parent = APP.Model;

	var Model = Parent.extend({

		idAttribute: 'id',

		options: {
			autofetch: false
		},
/*
		// already part of APP model?
		initialize: function(model, options){
			this.options = _.extend({}, this.options, options);

			if( this.options.autofetch ){
				this.fetch();
			}
			return Parent.prototype.initialize.apply( this, arguments );
		},
*/
		parse: function( data ){
			_.log( this.name, data );
			return data;
		}

	});

	// save in the global namespace
	APP.Models.Common = Model;

	return Model;

});
