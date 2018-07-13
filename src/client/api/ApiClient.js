import request from "superagent";

export default class ApiClient {

    findCars(callback) {
        request
            .get('http://localhost/nette-react/www/homepage/find-cars')
            .then(function(response) {
                callback(JSON.parse(response.text))
            });
    }

    removeCar(id) {
        request
            .get('http://localhost/nette-react/www/homepage/remove-car')
            .query({ id: id })
            .then(function(response) {
                // callback()
            });
    }

    addCar(vendor, model, year) {
        request
            .get('http://localhost/nette-react/www/homepage/add-car')
            .query({ vendor: vendor })
            .query({ model: model })
            .query({ year: year })
            // .set('Content-Type', 'application/x-www-form-urlencoded')
            .then(function() {
                console.log('omg');

            });
    }
}