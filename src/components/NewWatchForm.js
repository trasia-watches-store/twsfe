import React from 'react';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

class NewWatchForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    type: "",
    image: "",
  };

  componentDidMount() {
    if (this.props.watch) {
      const { pk, name, type, image } = this.props.watch;
      this.setState({ pk, name, type, image });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createWatch = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editWatch = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.watch ? this.editWatch : this.createWatch}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="type">Type:</Label>
          <Input
            type="text"
            name="type"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.type)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image:</Label>
          <Input
            type="text"
            name="image"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.image)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewWatchForm;