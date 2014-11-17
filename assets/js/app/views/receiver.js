define(["backbone.app", "app/views/common", "libs/DataChannel"], function( APP, Common ){

	var Parent = Common;

	var View = Parent.extend({

		el: "#receiver",

		url: "/assets/html/receiver.html",

		options: {
			channel: "test"
		},

		events: {
			"click button.start": "clickStart"
		},

		// Initialise DataChannel.js
		datachannel: new DataChannel(),

		initialize: function( options ){
			_.bindAll(this, "openSignalingChannel", "onCreateChannel", "onJoinChannel", "onSendMessage");

			return Parent.prototype.initialize.call(this, options);
		},

		clickStart: function( e ){
			e.preventDefault();

			console.log("start");

			$(this.el).find("textarea").html("http://");
			// Set the userid based on what has been defined by DataChannel
			// https://github.com/muaz-khan/WebRTC-Experiment/tree/master/DataChannel#use-custom-user-ids
			this.datachannel.userid = window.userid; //Math.random() * (9999 - 1000) + 1000;

			// Initialise DataChannel.js

			// Set custom Pusher signalling channel
			// https://github.com/muaz-khan/WebRTC-Experiment/blob/master/Signaling.md
			this.datachannel.openSignalingChannel = this.openSignalingChannel;

			this.datachannel.onmessage = function (message, userId) {
				//addMessage(message, userId);
				console.log("onmessage receiver", message, userId);
			};

			this.datachannel.onopen = function (userId) {
				//messageInput.focus();
				console.log("channel open");
			};

			this.onCreateChannel();
		},

		openSignalingChannel: function(config) {
			var self = this;
			var channel = config.channel || this.options.channel || "default-channel";

			var socket = {
				send: function (message) {
					var data = {
							//socketId: socketId,
							sender: self.datachannel.userid,
							channel: channel,
							message: message
					}

					self.model.set( data );
					self.model.save();
/*
					crudr.update({
						name: channel,
						model: data,
						options: {}
					}, {
						error: function(){ console.log("there was an error"); },
						success: function(){ console.log("all good"); },
					});
*/
				},
				channel: channel
			};

			// Call callback on successful connection to signalling channel
			if( crudr.socket() ){
				if (config.callback) config.callback( crudr.socket() );
			} else {
				this.model.bind("fetch", function() {
					if (config.callback) config.callback( crudr.socket() );
				});
			}
			// Proxy Pusher signaller messages to DataChannel
			this.model.bind("sync", function(message) {
				console.log("message receiver", message);
				config.onmessage(message);
			});

			return socket;
		},

		// events

		onCreateChannel: function() {
			var channel = this.options.channel;
			if (!channel) {
				console.log("No channel name given");
				return;
			}

			this.datachannel.open(channel);
		},

		onJoinChannel: function() {

			var channel = this.options.channel;
			if (!channel) {
				console.log("No channel name given");
				return;
			}

			// Search for existing data channels
			this.datachannel.connect(channel);
		},

		onSendMessage: function( data ) {
			//var message = messageInput.value;

			if (!data) {
				console.log("No data given");
				return;
			}

			this.datachannel.send(data);

		}

	});

	// save in the global namespace
	APP.Views.Receiver = View;

	return View;

});


/*
// Set up DataChannel handlers
datachannel.onopen = function (userId) {
	//messageInput.focus();
};





// Set up DOM listeners
createChannelBtn.addEventListener("click", onCreateChannel);
joinChannelBtn.addEventListener("click", onJoinChannel);
sendBtn.addEventListener("click", onSendMessage);
*/