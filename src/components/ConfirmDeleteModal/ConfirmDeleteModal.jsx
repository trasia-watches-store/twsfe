import React, { Component, Fragment } from "react";
import { Button, ModalHeader, Modal, ModalFooter } from "reactstrap";
import axios from "axios"
import { API_URL } from "../../constants"

class ConfirmDeleteModal extends Component {
    // let API_URL = process.env.API_URL
    // const url = 'http://localhost:8000/api/'

    state = {
        modal: false
    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }))
    }

    deleteWatch = pk => {
        axios.delete(API_URL + pk).then(() => {
            this.props.resetState()
            this.toggle()
        })
    }

    render() {
        return (
            <Fragment>
                {/* <Button color="danger" onClick={() => this.toggle()} style={{ marginBottom: "2em" }}>Remove</Button> */}
                <Button color="danger" onClick={() => this.toggle()}>Remove</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Confirm Removal</ModalHeader>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.deleteWatch(this.props.pk)}>Confirm</Button>
                        <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        )
    }
}

export default ConfirmDeleteModal