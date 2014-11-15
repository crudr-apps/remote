
define(["underscore", "backbone.app"], function( _, APP ){

	var Parent = APP.Collection;

	var Collection = Parent.extend({

		options: {
			autofetch: false
		},

		initialize: function(models, options){
			options = options || {};
			this.options = _.extend({}, this.options, options);
			// save id
			if( options.id ) this.id = options.id;
			//
			if(this.options.autofetch){
				this.fetch();
			}
		},

		parse: function( data ){
			_.log( this.name, data );
			return data;
		}

	});

	// save in the global namespace
	APP.Collections.Common = Collection;

	return Collection;

});
