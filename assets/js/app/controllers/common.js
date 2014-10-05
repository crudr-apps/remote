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

			// language file
			this.data.set({
				locale: new Locale()
			});

			return Parent.prototype.initialize.call(this, options);
		}
	});

});
