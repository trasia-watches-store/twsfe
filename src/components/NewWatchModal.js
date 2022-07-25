import { Fragment, useState } from 'react';
import { Modal, Button, ModalHeader, ModalBody } from 'reactstrap';
import NewWatchForm from './NewWatchForm';

const NewWatchModal = (props) => {
    const [modal, setModal] = useState(false);

    function toggle() {
        setModal(!modal);
    }

    const create = props.create
    let title = "Edit Watch"
    let button = <Button onClick={toggle}>Edit</Button>

    if (create) {
        title = "Create New Watch"
        button = <Button color="primary" className="float-right" onClick={toggle} style={{ minWidth: "200px" }}>Create</Button>
    }

    return (
        <Fragment>
            {button}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    <NewWatchForm 
                    resetWatch={props.resetWatch}
                    toggle={toggle}
                    watch={props.watch}
                    />
                </ModalBody>
            </Modal>
        </Fragment>
    );
}

export default NewWatchModal