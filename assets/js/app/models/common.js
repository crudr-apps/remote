define(["underscore", "backbone.app"], function( _, APP ){

	var Parent = APP.Model;

	var Model = Parent.extend({

		idAttribute: '_id',

		//
		initialize: function(model, options){
			this.options = _.extend({}, this.options, options);

			if( this.options.autofetch ){
				this.fetch();
			}
			return Parent.prototype.initialize.apply( this, arguments );
		}

	});

	// save in the global namespace
	APP.Models.Common = Model;

	return Model;

});
