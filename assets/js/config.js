var env = {
	// enviromental variables
	localhost: ["localhost", "192.168.0" ],
	production: [""],
	staging: [""],
	server: {

	}
};

var config = {
	isDev: ( env.localhost.indexOf( window.location.hostname ) > -1 ),
	isProd: ( env.production.indexOf( window.location.hostname ) > -1 ),
	isStaging: ( env.staging.indexOf( window.location.hostname ) > -1 ),
	// enviromental variables
	api: function(){ return (config.isDev )? "/test/data" : "" },
	// third-party credentials
	creds: {
		facebook: "",
		twitter: "",
		analytics: "UA-12345678-X"
	},
	app: {
		require: true,
		pushState: false
	},
	// require config
	js: {
		baseUrl: "/assets/js/",
		paths: {
			"backbone.app": [
				"libs/backbone.app"
			],
			common: [
				"libs/common-min"
			],
			json3: [
				"//cdnjs.cloudflare.com/ajax/libs/json3/3.3.0/json3.min"
			],
			jquery: [
				"//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min"
			],
			underscore: [
				"//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min"
			],
			handlebars: [
				"//cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0-alpha.2/handlebars.min"
			],
			backbone: [
				"//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min"
			],
			ga: "//www.google-analytics.com/analytics"

		},
		shim: {
			"backbone.app": {
				exports: "APP" // global scope not required?
			},
			common: {
				deps: [],
				exports: "c"
			},
			jquery: {
				deps: [
					"json3"
				]
			},
			underscore: {
				exports: "_"
			},
			handlebars: {
				exports: "Handlebars"
			},
			backbone: {
				deps: [
					"underscore",
					"jquery"
				],
				exports: "Backbone"
			}
		},
		deps: [
			"common",
			"json3",
			"jquery",
			"underscore",
			"handlebars",
			"backbone"
		],
		callback: function(){
			window.init();
		}
	}
}

// APIs

// flags
if(typeof DEBUG == "undefined") DEBUG = config.isDev; // condition is localhost...

