import React from 'react';
import Car from './car';
import AddCar from './CarForm';
import EditCar from './CarForm';
import ApiClient from './api/ApiClient';
import EditCarModal from './baseModal';
import AddCarModal from './baseModal';

export default class Cars extends React.Component {

	apiClient;

	constructor() {
		super();
		this.apiClient = new ApiClient();
		this.removeCar = this.removeCar.bind(this);
		this.toggleCar = this.toggleCar.bind(this);
		this.onSubmitCarForm = this.onSubmitCarForm.bind(this); // kdyz to nabinduju, tak v te funcki muzu pouzit this pro pristup k teto tride. Jinak to funguje klasicky ze je to context te tridy do ktere to strkam
		this.editCar = this.editCar.bind(this);
		this.saveModalState = this.saveModalState.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.reloadCars();


		this.state = {
			cars: [],
			addCarModal: {
				title: 'Vytvořit auto',
				show: false
			},
			modal: {
				title: 'vychozi',
				show: false
			},
		};
	}


	reloadCars() {
		let self = this;
		this.apiClient.findCars().then(function(cars) {
			self.setState(cars);
			self.render();
			console.log('reload', cars);
		});
	}


	/**
	 * @returns {XML}
	 */
	render() {
		return (
			<div>
				<EditCarModal
					title={this.state.modal.title}
					show={this.state.modal.show}
					onClose={this.closeModal}
				>
					<EditCar car={this.state.modal.car} onSubmitForm={this.onSubmitCarForm} />
				</EditCarModal>

				<AddCarModal
					title={this.state.addCarModal.title}
					show={this.state.addCarModal.show}
					onClose={this.closeModal}
				>
					<AddCar onSubmitForm={this.onSubmitCarForm} />
				</AddCarModal>


				<div className="text-right">
					<button className="btn btn-primary" onClick={() => this.openAddCarModal()}>
						Vytvořit auto
					</button>
				</div>


				<h3>Výpis všech aut ({this.state.cars.length})</h3>
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
		this.setState({
			modal: {
				title: 'Editace auta ' + car.brand,
				show: true,
				car: car
			}
		});
	}

	/**
	 *
	 * @param {Promise} promise
	 */
	onSubmitCarForm(promise) {
		this.closeModal();
		this.setState({
			addCarModal: {
				show: false
			}
		});

		console.log('onSubmit');

		let self = this;

		promise.then(function() {
			console.log('promise then');
			self.reloadCars(); // @todo better solution is load only new inserted car and add to list
		});
	}

	openAddCarModal() {
		this.setState({
			addCarModal: {
				show: true
			}
		});
	}

}