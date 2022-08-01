import React from 'react';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../../constants";

class NewWatchForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    type: "",
    wimage: "",
  };

  componentDidMount() {
    if (this.props.watch) {
      const { pk, name, type, wimage } = this.props.watch;
      this.setState({ pk, name, type, wimage });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onImageChange = (evt) => {
      evt.preventDefault()
      // console.log(evt.target.name)
      // console.log(evt.target.files[0])
      console.log(this.state.wimage)
      if (evt.target.files[0]) {
        this.setState({ ...this.state, [evt.target.name]: evt.target.files[0] });
      }
    }

  createWatch = e => {
    e.preventDefault();
    // console.log(this.state);
    axios.post(API_URL, this.state, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editWatch = e => {
    e.preventDefault();
    // console.log(this.state)
    this.setState({ ...this.state, 'wimage': this.state.wimage })
      console.log(this.state)
    axios.put(API_URL + this.state.pk, this.state, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(() => {
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
          <Label for="wimage">Wimage:</Label>
          <Input
            type="file"
            name="wimage"
            onChange={this.onImageChange}
            // value={this.defaultIfEmpty(this.state.wimage)}
          />
        </FormGroup>
        {/* <FormGroup>
          <Label for="image">Image:</Label>
          <Input
            type="file"
            name="image"
            onChange={this.onImageChange}
          />
        </FormGroup> */}
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewWatchForm;