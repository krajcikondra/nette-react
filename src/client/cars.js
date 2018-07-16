import React from 'react';
import Car from './car';
import AddCar from './addCar';
import EditCar from './addCar';
import ApiClient from './api/ApiClient';
import BaseModal from './baseModal';

export default class Cars extends React.Component {

    apiClient;

    constructor() {
        super();
        this.apiClient = new ApiClient();
        this.addCar = this.addCar.bind(this);
        this.removeCar = this.removeCar.bind(this);
        this.toggleCar = this.toggleCar.bind(this);
        this.editCar = this.editCar.bind(this);
        this.saveModalState = this.saveModalState.bind(this);
        this.closeModal = this.closeModal.bind(this);
        let self = this;
        this.apiClient.findCars(function(cars) {
            self.setState(cars);
            self.render();
        });
        this.state = {
            cars: [],
            modal: {
                title: 'vychozi',
                show: false
            },
        };
    }

    render() {
        return (
            <div>
                <BaseModal
                    title={this.state.modal.title}
                    show={this.state.modal.show}
                    onClose={this.closeModal}
                >
                    <EditCar add={this.addCar} car={this.state.modal.car}/>
                </BaseModal>
                <AddCar add={this.addCar} />
                <h3>Auta ({this.state.cars.length})</h3>
                {this.state.cars.map(car => {
                    return <Car car={car}
                                key={car.id}
                                remove={this.removeCar}
                                toggle={this.toggleCar}
                                edit={this.editCar}
                    />;
                })}
            </div>
        );
    }

    closeModal() {
        this.setState({
            modal: {
                show: false
            }
        });
    }

    saveModalState() {
        console.log('save modal state');
    }

    editCar(carId, brand, model, year, km) {

    }

    addCar(car) {
        car.id = this.state.cars.length ?
            this.state.cars[this.state.cars.length - 1].id + 1 : 1;

        this.setState({
            cars: this.state.cars.concat([car])
        });
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

    editCar(car) {
        // @todo udelat to stejne jako je udelane toggle
        this.setState({
            modal: {
                title: 'Editace auta ' + car.brand,
                show: true,
                car: car
            }
        });
        console.log('state po edit car', this.state);
    }

}