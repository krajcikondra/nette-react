import React from 'react';
import './addCar.less';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, HelpBlock, ControlLabel, InputGroup } from 'react-bootstrap';
import ApiClient from './api/ApiClient';

export default class AddCar extends React.Component {

    apiClient;

    constructor(props, context) {
        super(props, context);
        this.handleChangeBrand = this.handleChangeBrand.bind(this);
        this.handleChangeModel = this.handleChangeModel.bind(this);
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.handleChangeKm = this.handleChangeKm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        if (this.props.car) {
            this.state = this.props.car;
            console.log('state stat v konstruktoru 1');

        } else {
            console.log('state stat v konstruktoru 2');
            this.state = {
                value: '',
                brand: '',
                model: '',
                year: '',
                km: ''
            };
        }
        this.apiClient = new ApiClient();
    }

    handleChangeBrand(e) {
        this.setState({ brand: e.target.brand });
    }

    handleChangeModel(e) {
        this.setState({ model: e.target.model });
    }

    handleChangeYear(e) {
        this.setState({ year: e.target.year });
    }


    handleChangeKm(e) {
        this.setState({ km: e.target.km });
    }



    render() {
        return (
            <div className="addCar">
                <h3>Nové auto</h3>,
                <form onSubmit={(e) => this.handleSubmit(e)} ref="addCar">

                    <FormGroup validationState={this.getValidationState()} >
                        <ControlLabel>Znacka</ControlLabel>
                        <FormControl type="text" name="brand" value={this.state.brand} placeholder="Enter text" onChange={this.handleChangeBrand} />
                        <FormControl.Feedback />
                        <HelpBlock>Validation is based on string length.</HelpBlock>
                    </FormGroup>

                    <FormGroup validationState={this.getValidationState()} >
                        <ControlLabel>Model</ControlLabel>
                        <FormControl type="text"  name="model" placeholder="Enter text" value={this.state.model} onChange={this.handleChangeModel} />
                        <FormControl.Feedback />
                        <HelpBlock>Validation is based on string length.</HelpBlock>
                    </FormGroup>

                    <FormGroup validationState={this.getValidationState()} >
                        <ControlLabel>Rok</ControlLabel>
                        <FormControl type="text" name="year" placeholder="Enter text" value={this.state.year} onChange={this.handleChangeYear} />
                        <FormControl.Feedback />
                        <HelpBlock>Validation is based on string length.</HelpBlock>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Pocet najetych km</ControlLabel>
                        <InputGroup>
                            <FormControl  value={this.state.km} type="text" onChange={this.handleChangeKm} />
                            <InputGroup.Addon>
                               km
                            </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                    <input type="submit" value="Uložit" className="btn btn-primary" />
                </form>
            </div>
           );
    }


    getValidationState() {
        return 'success';
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ brand: e.target.brand });
        console.log(this.state, e.target.brand);
        return;

        // @todo nastavovani proops stejnee nefunguje
        // this.setState({
        //         brand: ReactDOM.findDOMNode(this.refs.brand).value,
        //         model: ReactDOM.findDOMNode(this.refs.model).value,
        //         year: ReactDOM.findDOMNode(this.refs.year).value,
        //         km: ReactDOM.findDOMNode(this.refs.km).value
        // });
        console.log(this.state);
        if (this.state.id) {
            this.apiClient.editCar(this.state.id, this.state.brand, this.state.model, this.year, this.km);
        } else {
            this.apiClient.addCar(this.state.brand, this.state.model, this.state.year, this.state.km);
        }

        ReactDOM.findDOMNode(this.refs.addCar).reset();
    }

}

AddCar.propTypes = {
    add: React.PropTypes.func.isRequired,
};