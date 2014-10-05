/*
	Publisher: K&D Interactive Inc.
	Read the /humans.txt file for a list of the people involved in the development of this application
*/
var app;

require.config( config.js ); // this is optional - remove if using KISSCMS or Brisk

function init(){
	// require might execute init before the document is ready...
	require(["backbone.app"], function(APP){ // why require twice if APP is alread in the global namespace?
		// setup app
		APP(config.app, function( Controller ){
			// initialize
			app = new Controller();
			// update Backbone options
			Backbone.history.start({ pushState: config.app.pushState });
		});

	});
}