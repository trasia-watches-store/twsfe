import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../../constants";

class NewWatchForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    type: "",
    features: "",
    wimage: "",
  };

  componentDidMount() {
    if (this.props.watch) {
      const { pk, name, type, features, wimage } = this.props.watch;
      this.setState({ pk, name, type, features, wimage });
      
    }
  }

  onChange = (e) => {
    console.log(this.state);
      console.log(this.props.watch);
    this.setState({ [e.target.name]: e.target.value });
  };

  onImageChange = (evt) => {
    evt.preventDefault();
    // console.log(evt.target.name)
    // console.log(evt.target.files[0])
    console.log(this.state.wimage);
    if (evt.target.files[0]) {
      this.setState({ ...this.state, [evt.target.name]: evt.target.files[0] });
    }
  };

  createWatch = (e) => {
    e.preventDefault();
    // console.log(this.state);
    axios
      .post(API_URL, this.state, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        this.props.resetState();
        this.props.toggle();
      });
  };

  editWatch = (e) => {
    e.preventDefault();
    // console.log(this.state)
    this.setState({ ...this.state, wimage: this.state.wimage });
    console.log(this.state);
    axios
      .put(API_URL + this.state.pk, this.state, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        this.props.resetState();
        this.props.toggle();
      });
  };

  defaultIfEmpty = (value) => {
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
          <Label for="type">Features:</Label>
          <Input type="textarea" name="features" onChange={this.onChange} value={this.defaultIfEmpty(this.state.features)}/>
        </FormGroup>
        <FormGroup>
          <Label for="type">Price:</Label>
          <Input type="number" name="price" min='0' max='999999' step='0.01' required onChange={this.onChange} value='20'/>
          {/* <Input type="number" name="price" min='0' max='999999' step='0.01' required onChange={this.onChange} value={this.defaultIfEmpty(this.state.features)}/> */}
        </FormGroup>
        <FormGroup>
          <Label for="type">Number of stock:</Label>
          <Input type="number" name="price" min='0' max='999999' step='1' required onChange={this.onChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="type">Brand:</Label>
          <Input type="" name="" onChange={this.onChange} value={this.defaultIfEmpty(this.state.features)}/>
        </FormGroup>
        <FormGroup>
          <Label for="type">Family:</Label>
          <Input type="" name="" onChange={this.onChange} value={this.defaultIfEmpty(this.state.features)}/>
        </FormGroup>
        <FormGroup>
          <Label for="type">Model:</Label>
          <Input type="" name="" onChange={this.onChange} value={this.defaultIfEmpty(this.state.features)}/>
        </FormGroup>
        <FormGroup>
          <Label for="type">Limited:</Label>
          <Input type="" name="" onChange={this.onChange} value={this.defaultIfEmpty(this.state.features)}/>
        </FormGroup>
        <FormGroup>
          <Label for="type">Water Resistance Feature:</Label>
          <Input type="" name="" onChange={this.onChange} value={this.defaultIfEmpty(this.state.features)}/>
        </FormGroup>
        <FormGroup>
          <Label for="type">Case Description:</Label>
          <Input type="" name="" onChange={this.onChange} value={this.defaultIfEmpty(this.state.features)}/>
        </FormGroup>
        <FormGroup>
          <Label for="type">Dial Description:</Label>
          <Input type="" name="" onChange={this.onChange} value={this.defaultIfEmpty(this.state.features)}/>
        </FormGroup>
        <FormGroup>
          <Label for="type">Movement Description:</Label>
          <Input type="" name="" onChange={this.onChange} value={this.defaultIfEmpty(this.state.features)}/>
        </FormGroup>

        <FormGroup>
          <Label for="wimage">Wimage:</Label>
          <Input
            type="file"
            name="wimage"
            onChange={this.onImageChange}
            // dummy image https://s3.ap-southeast-2.amazonaws.com/watchespics/cffdfa.png 
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
