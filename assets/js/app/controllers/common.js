define([
	"backbone",
	"backbone.app",
	"libs/backbone.ui.alert",
	"app/models/locale",
	"helpers/common",
	"helpers/analytics",
	"helpers/handlebars",
	"helpers/jquery",
	"helpers/underscore",
], function( Backbone, APP, Alert, Locale ){

	var Parent = APP.Router;

	return Parent.extend({

		options: {
			session: {
				remote: false,
				// url: "/test/data/session.json"
			}
		},

		data: new APP.Model(), // move to backbone app?

		initialize: function( options ){
			// display any server-side alerts
			if( typeof client !== "undefined" ){
				// assuming client has a set structure...
				// - setting debug flag
				this.options.debug = client.debug;
				// - display alerts
				if( client.alerts ){
				for( var i in client.alerts ){
					var messages = client.alerts[i];
					var type = i;
					for( var j in messages ){
						new Alert({
							message : messages[j],
							type: type
						});
					}
				}
				}
			}
			// language file
			this.data.set({
				locale: new Locale()
			});

			return Parent.prototype.initialize.call(this, options);
		}
	});

});
