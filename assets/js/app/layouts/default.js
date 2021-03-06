define(["backbone.app", "app/layouts/common", "app/views/receiver"], function( APP, Common, Receiver ){

	var Parent = Common;

	var Layout = Parent.extend({

		name: "default",

		options: {
			classNames: ""
		},

		initialize: function( options ){

			this.set({
				receiver: new Receiver({
					model: options.data.get("remote")
				})
			});

			return Parent.prototype.initialize.call(this, options);
		}
	});

	// save in the global namespace
	APP.Layouts.Default = Layout;

	return Layout;

});