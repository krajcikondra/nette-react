import request from "superagent";
import HttpClient from "./HttpClient";

export default class ApiClient {

    httpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }


    findCars(callback) {
        request
            .get('http://localhost/nette-react/www/homepage/find-cars')
            .then(function(response) {
                callback(JSON.parse(response.text))
            });
    }

    removeCar(id) {
        return new Promise(function(resolve, reject) {
            request
                .get('http://localhost/nette-react/www/homepage/remove-car')
                .query({ id: id })
                .then(function(response) {
                    if (response.statusCode === 200) resolve();
                    else reject();
                });
        });
    }

    /**
     * @param vendor
     * @param model
     * @param year
     * @param km
     * @returns {Promise}
     */
    addCar(vendor, model, year, km) {
        return new Promise(function(reseolve, reject) {
            request
                .get('http://localhost/nette-react/www/homepage/add-car')
                .query({ vendor: vendor })
                .query({ model: model })
                .query({ year: year })
                .query({ km: km })
                .then(function(response) {
                    if (response.statusCode === 200) reseolve();
                    else reject();
                });
        });
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