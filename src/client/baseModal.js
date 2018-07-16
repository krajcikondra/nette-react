import React from 'react';
import {Modal, Popover, Tooltip, Button, OverlayTrigger} from 'react-bootstrap';

export default class BaseModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
    }


    handleShow() {
        this.props.show = true;
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={() => this.props.onClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

BaseModal.propTypes = {
    show: React.PropTypes.object.isRequired,
    onClose: React.PropTypes.func.isRequired,
};