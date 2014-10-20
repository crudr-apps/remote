define(["app/models/common", "backbone.app"], function( Backbone, APP ){

	var Parent = Common;

	var Model = Common.extend({

		defaults: {
			"text": {}
		},

		// move initialize to common model?
		initialize: function(model, options){
			this.options = _.extend({}, this.options, options);

			if( this.options.autofetch ){
				this.fetch();
			}
			return Parent.prototype.initialize.apply( this, arguments );
		},

		parse: function( data ){
			_.log( "locale", data );
			window.locale = data;
			return data;
		}

	});

	// save in the global namespace
	APP.Models.Model = Model;

	return Model;

});