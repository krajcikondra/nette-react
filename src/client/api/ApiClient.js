import HttpClient from "./HttpClient";

export default class ApiClient {

	httpClient;

	constructor() {
		this.httpClient = new HttpClient();
	}


	/**
	 * @returns {Promise}
	 */
	findCars() {
		return this.httpClient.sendGetRequest(
			'http://localhost/nette-react/www/homepage/find-cars',
			{}
		);
	}

	/**
	 * @param {int} id
	 * @returns {Promise}
	 */
	removeCar(id) {
		return this.httpClient.sendGetRequest(
			'http://localhost/nette-react/www/homepage/remove-car',
			{ id: id }
		);
	}

	/**
	 * @param vendor
	 * @param model
	 * @param year
	 * @param km
	 * @returns {Promise}
	 */
	addCar(vendor, model, year, km) {
		return this.httpClient.sendGetRequest(
			'http://localhost/nette-react/www/homepage/add-car',
			{ vendor: vendor, model: model,year: year, km: km }
		);
	}


	/**
	 *
	 * @param {number} id
	 * @param {string} vendor
	 * @param {string} model
	 * @param {int} year
	 * @param {int} km
	 * @returns {Promise}
	 */
	editCar(id: number, vendor, model, year, km) {
		return this.httpClient.sendGetRequest(
			'http://localhost/nette-react/www/homepage/edit-car',
			{ id: id, vendor: vendor, model: model, year: year, km: km }
		);
	}
}