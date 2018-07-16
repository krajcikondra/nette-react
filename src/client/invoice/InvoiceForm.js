import React, {findDOMNode} from 'react';

export default class InvoiceForm extends React.Component {

    // priklad JSX zapisu
    render() {
        return (
            React.DOM.form({className: 'nameForm'},
                React.DOM.input({type: 'text', placeholder: 'Jméno', className: 'form-control'}),
                React.DOM.input({type: 'text', placeholder: 'Příjmení', className: 'form-control'}),
                React.DOM.input({type: 'submit', value: 'Poslat', className: 'btn btn-primary'})
            )
        )
    }

    handleSubmit(e) {
        e.preventDefault();
    }
}
