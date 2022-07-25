import { Button, Form, Input, Label, FormGroup } from 'reactstrap';
import axios from 'axios';
import { API_URL } from '../constants/index';
import { useState } from 'react';

export default function NewWatchForm(props){
    const [watch, setWatch] = useState({
        name: '',
        type: '',
        image: '',
    })

    function componentDidMount() {
        if (props.watch) {
            setWatch(props.watch);
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setWatch({ ...watch, [name]: value });
    }

    function createWatch(event) {
        event.preventDefault();
        axios.post(API_URL, watch)
            .then(() => {
                props.resetWatch();
                props.toggle();
            })
    }

    function updateWatch(event) {
        event.preventDefault();
        axios.put(`${API_URL}${watch.pk}/`, watch)
            .then(() => {
                props.resetWatch();
                props.toggle();
            })
    }

    function defaultIfEmpty(value) {
        return value === "" ? "" : value;
    }

    return (
        <Form onSubmit={props.watch ? updateWatch : createWatch}>
            <FormGroup>
                <Label for="name">Name: </Label>
                <Input type="text" name="name" value={defaultIfEmpty(watch.name)} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="type">Type: </Label>
                <Input type="text" name="type" value={defaultIfEmpty(watch.type)} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="image">Image: </Label>
                <Input type="text" name="image" value={defaultIfEmpty(watch.image)} onChange={handleChange} />
            </FormGroup>
            <Button>Send</Button>
        </Form>
    )

}