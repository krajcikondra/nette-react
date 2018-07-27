import request from "superagent";

export default class HttpClient {

		/**
	 * Send http request by method GET
	 * @param {string} url
	 * @param {object} args
	 * @returns {Promise}
	 */
	sendGetRequest(url, args) {
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