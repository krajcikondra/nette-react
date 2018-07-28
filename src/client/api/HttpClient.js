import request from "superagent";

export default class HttpClient {

		/**
	 * Send http request by method GET
	 * @param {string} url
	 * @param {object} args
	 * @returns {Promise}
	 */
	sendGetRequest(url, args) {


			if (! "WebSocket" in window) { alert("WebSocket is supported by your Browser!"); }

			var ws = IPub.WebSockets.WAMP.initialize("ws://localhost:8800");

			ws.on('socket/connect', function(session){

				// The callback function in "subscribe" is called everytime an event is published in that channel.
				session.subscribe("en/communication/car/room/1", function(uri, payload){
					console.log("Received message", payload.msg);
				});

				session.publish('en/communication/car/room/123', 'This is a message!');
			})

			return new Promise(function (reseolve, reject) {
			request
				.get(url)
				.query(args)
				.then(function (response) {
					if (response.statusCode === 200) reseolve(JSON.parse(response.text));
					else reject();
				});

		});
	}
}