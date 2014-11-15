define(["backbone.app", "app/layouts/common"], function( APP, Common ){

	var Layout = Common.extend({

		name: "default",

		options: {
			classNames: ""
		}
	});

	// save in the global namespace
	APP.Layouts.Default = Layout;

	return Layout;

});