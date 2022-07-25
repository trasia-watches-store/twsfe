import {  Fragment, useState } from 'react';
import { Modal, Button, ModalHeader, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { API_URL } from '../constants/index';

export default function ConfirmDeleteModal(props){
    const [modal, setModal] = useState(false);

    function toggle() {
        setModal(!modal);
    }

    function deleteWatch() {
        axios.delete(`${API_URL}${props.watch.pk}/`)
            .then(() => {
                props.resetWatch();
                props.toggle();
            })
    }

    return (
        <Fragment>
            <Button color="danger" className="float-right" onClick={toggle()}>Delete</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Confirm Delete?</ModalHeader>
                <ModalFooter>
                    <Button type="button" color="danger" onClick={() => deleteWatch(props.pk)}>Delete</Button>
                    <Button type="button" color="secondary" onClick={() => toggle()}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Fragment>
    );
}