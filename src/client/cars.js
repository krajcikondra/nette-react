import React from 'react';
import Car from './car';
import AddCar from './addCar';
import request from "superagent";
import ApiClient from './api/ApiClient';

export default class Cars extends React.Component {

    apiClient;

    constructor() {
        super();
        this.apiClient = new ApiClient();
        this.addCar = this.addCar.bind(this);
        this.removeCar = this.removeCar.bind(this);
        this.toggleCar = this.toggleCar.bind(this);
        let self = this;
        this.apiClient.findCars(function(cars) {
            self.setState(cars);
            self.render();

        });
        this.state = {cars: []};
    }

    render() {
        return (
            <div>
                <AddCar add={this.addCar} />
                <h3>Auta ({this.state.cars.length})</h3>
                {this.state.cars.map(car => {
                    return <Car car={car}
                                key={car.id}
                                remove={this.removeCar}
                                toggle={this.toggleCar} />;
                })}
            </div>
        );
    }

    addCar(car) {
        car.id = this.state.cars.length ?
            this.state.cars[this.state.cars.length - 1].id + 1 : 1;

        this.setState({
            cars: this.state.cars.concat([car])
        });
        this.apiClient.addCar(car.brand, car.model, car.year);
    }

    removeCar(id) {
        this.setState({
            cars: this.state.cars.filter(car => car.id !== id)
        });
        this.apiClient.removeCar(id);
    }

    toggleCar(id) {
        this.setState({
            cars: this.state.cars.map(car => {
                if (car.id !== id) {
                    return car;
                }
                car.details = !car.details;
                return car;
            })
        });
    }

}