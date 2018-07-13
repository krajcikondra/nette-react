import request from "superagent";

export default class ApiClient {

    findCars(callback) {
        // http://localhost/nette-react/www/homepage/find-cars

        request
            .get('http://localhost/nette-react/www/homepage/find-cars')
            .then(function(response) {
                callback(JSON.parse(response.text))
            });


        // return {cars: [
        //     {id: 1, brand: 'Ferrarxi', model: 'FF', year: '2014', details: false},
        //     {id: 2, brand: 'BMW', model: 'M5', year: '2013', details: true}
        // ]};
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