define([
	"backbone.app",
	"app/controllers/common",
	"app/layouts/default"
	], function( APP, Common, LayoutDefault ){

	var Router = Common.extend({

		routes: {
			"": "index"
		},

		index: function(){
			// check if authenticated
			//if( this.session.get("auth") ) return this.home();

			_.log("in index");
			this.data.set({
			});

			this.layout = new LayoutDefault({ data: this.data });
		},

		// in case there's a logged in state...
		home: function(){
			_.log("in home");
			var self = this;

			this.data.set({
			});

			//this.layout = new Home({ data: self.data });

		}

	});


	// save in the global namespace
	APP.Routers.Default = Router;

	return Router;

});