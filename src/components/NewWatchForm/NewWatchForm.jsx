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
    price: 0,
    stockNum: 0,
    brand: "",
    family: "",
    model: "",
    limited: 'False',
    water_resistance_depth: 0,
    case_description: "",
    dial_description: "",
    movement_description: "",
    wimage: "",
  };

  componentDidMount() {
    if (this.props.watch) {
      // const { pk, name, type, features, wimage } = this.props.watch;
      // this.setState({ pk, name, type, features, wimage });
      const { pk, name, type, features, price, stockNum, brand, family, model, limited, water_resistance_depth, case_description, dial_description, movement_description, wimage } = this.props.watch;
      this.setState({ pk, name, type, features, price, stockNum, brand, family, model, limited, water_resistance_depth, case_description, dial_description, movement_description, wimage });
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
          <Label for="features">Features:</Label>
          <Input type="textarea" name="features" onChange={this.onChange} value={this.defaultIfEmpty(this.state.features)}/>
        </FormGroup>
        <FormGroup>
          <Label for="price">Price:</Label>
          <Input type="number" name="price" min='0' max='9999' step='0.01' required onChange={this.onChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="stockNum">Number of stock:</Label>
          <Input type="number" name="stockNum" min='0' max='9999' step='1' required onChange={this.onChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="brand">Brand:</Label>
          <Input type="text" name="brand" onChange={this.onChange} value={this.defaultIfEmpty(this.state.brand)}/>
        </FormGroup>
        <FormGroup>
          <Label for="family">Family:</Label>
          <Input type="text" name="family" onChange={this.onChange} value={this.defaultIfEmpty(this.state.family)}/>
        </FormGroup>
        <FormGroup>
          <Label for="type">Model:</Label>
          <Input type="text" name="model" onChange={this.onChange} value={this.defaultIfEmpty(this.state.model)}/>
        </FormGroup>
        <FormGroup>
          <div>Limited:</div>
          <div>
          <Input type="radio" name="limited" placeholder="yes" onChange={this.onChange} value='True'/>
          <Label for="type">Yes</Label>
          <div></div>
          <Input type="radio" name="limited" onChange={this.onChange} value='False' checked/>
          <Label for="type">No</Label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="type">Water Resistance Feature:</Label>
          <Input type="number" min='0' max='999999' step='1'  name="water_resistance_depth" onChange={this.onChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="type">Case Description:</Label>
          <Input type="textarea" name="case_description" onChange={this.onChange} value={this.defaultIfEmpty(this.state.case_description)}/>
        </FormGroup>
        <FormGroup>
          <Label for="type">Dial Description:</Label>
          <Input type="textarea" name="dial_description" onChange={this.onChange} value={this.defaultIfEmpty(this.state.dial_description)}/>
        </FormGroup>
        <FormGroup>
          <Label for="type">Movement Description:</Label>
          <Input type="textarea" name="movement_description" onChange={this.onChange} value={this.defaultIfEmpty(this.state.movement_description)}/>
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
