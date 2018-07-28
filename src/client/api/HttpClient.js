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

			var ws = new WebSocket("ws://localhost:8800/car");

			ws.onopen = function() {

				// Web Socket is connected, send data using send()
				ws.send("Message to send");
				alert("Message is sent...");
			};

			ws.onmessage = function (evt) {
				var received_msg = evt.data;
				alert("Message is received...");
			};

			ws.onclose = function() {

				// websocket is closed.
				alert("Connection is closed...");
			};



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