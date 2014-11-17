define([
	"backbone.app",
	"app/controllers/common",
	"app/models/remote",
	"app/layouts/default",
	"app/layouts/remote"
	], function( APP, Common, Model, Default, Remote ){

	var Router = Common.extend({

		routes: {
			"": "index",
			"remote": "remote"
		},

		index: function(){
			var self = this;

			_.log("in index");

			// initialize crudr
			crudr.connect({ auth: false, log: true }, function( response ){

				self.data.set({
					remote: new Model()
				});

				//window.messages = new Messages();
				//new MessagesView({ el: $('#messages'), collection: messages }).render();
				self.layout = new Default({ data: self.data });

			});

		},

		remote: function(){
			var self = this;

			_.log("in remote");

			// initialize crudr
			crudr.connect({ auth: false, log: true }, function( response ){

				self.data.set({
					remote: new Model()
				});

				//window.messages = new Messages();
				//new MessagesView({ el: $('#messages'), collection: messages }).render();
				self.layout = new Remote({ data: self.data });

			});

		}

	});


	// save in the global namespace
	APP.Routers.Default = Router;

	return Router;

});