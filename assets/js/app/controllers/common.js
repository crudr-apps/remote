define([
	"backbone",
	"backbone.app",
	"app/models/locale",
	"helpers/common",
	"helpers/analytics",
	"helpers/handlebars",
	"helpers/jquery",
	"helpers/underscore"
], function( Backbone, APP, Locale ){

	var Data = Backbone.Model.extend({
		// add is like set but only if not available
		add: function( obj ){
			var self = this;
			var data = {};
			_.each( obj, function( item, key ){
				if( _.isUndefined( self.get(key) ) ){
					data[key] = item;
				}
			});
			this.set( data );
		}
	});

	return APP.Router.extend({

		options: {
			session: {
				remote: false,
				// url: "/test/data/session.json"
			}
		},

		data: new Data(), // move to backbone app?

		initialize: function( options ){

			// language file
			this.data.set({
				locale: new Locale()
			});

			return Backbone.Router.prototype.initialize.call(this, options);
		}
	});

});
