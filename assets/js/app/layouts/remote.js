define(["backbone.app", "app/layouts/common", "app/views/remote"], function( APP, Common, Remote ){

	var Parent = Common;

	var Layout = Parent.extend({

		name: "remote",

		options: {
			classNames: ""
		},

		initialize: function( options ){

			this.set({
				receiver: new Remote({
					model: options.data.get("remote")
				})
			});

			return Parent.prototype.initialize.call(this, options);
		}
	});

	// save in the global namespace
	APP.Layouts.Remote = Layout;

	return Layout;

});