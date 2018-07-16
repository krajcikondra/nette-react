import React from 'react';
import {Modal, Popover, Tooltip, Button, OverlayTrigger} from 'react-bootstrap';

export default class BaseModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);

        // this.state = {
        //     show: false,
        //     title: 'Nic'
        // };

    }


    handleShow() {
        this.props.show = true;
    }

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

        return (
            <div>

                <p>Click to get the full Modal experience!</p>

                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={this.props.show} onHide={() => this.props.onClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>s
                    <Modal.Body>
                        {this.props.children}

                        <h4>{this.props.title}</h4>
                        <p>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>

                        <h4>Popover in a modal</h4>
                        <p>
                            there is a{' '}
                            <OverlayTrigger overlay={popover}>
                                <a href="#popover">popover</a>
                            </OverlayTrigger>{' '}
                            here
                        </p>

                        <h4>Tooltips in a modal</h4>
                        <p>
                            there is a{' '}
                            <OverlayTrigger overlay={tooltip}>
                                <a href="#tooltip">tooltip</a>
                            </OverlayTrigger>{' '}
                            here
                        </p>

                        <hr />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

BaseModal.propTypes = {
    show: React.PropTypes.object.isRequired,
    onClose: React.PropTypes.func.isRequired,
};