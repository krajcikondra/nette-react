import React from 'react';

export default class Car extends React.Component {

    render() {
        const styles = {
            border: '2px solid #CCC',
            padding: 10,
            margin: '10px 10px 10px 0px',
            backgroundColor: '#FFF',
            float: 'left'
        };

        return (
            <div style={styles}>
                <div>
                    <b>Značka:</b> {this.props.car.brand}
                </div>
                {this.props.car.details &&
                <div>
                    <b>Model:</b> {this.props.car.model} <br />
                    <b>Rok:</b> {this.props.car.year}
                </div>
                }

                <button className="btn btn-primary" onClick={() => this.props.toggle(this.props.car.id)}>
                    {this.props.car.details ? 'Méně' : 'Více'}
                </button>
                {' '}

                <button className="btn btn-success" onClick={() => this.props.edit(this.props.car)}>
                    Edit
                </button>
                <button className="btn btn-danger" onClick={() => this.props.remove(this.props.car.id)}>
                    x
                </button>
            </div>
        );
    }

}

Car.propTypes = {
    car: React.PropTypes.object.isRequired,
    remove: React.PropTypes.func.isRequired,
    toggle: React.PropTypes.func.isRequired,
    edit: React.PropTypes.func.isRequired
};