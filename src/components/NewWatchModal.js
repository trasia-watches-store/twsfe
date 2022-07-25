import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewWatchForm from "./NewWatchForm";

class NewWatchModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    let title = "Edit Watch";
    let button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New Watch";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Create New
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewWatchForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              watch={this.props.watch}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewWatchModal;