import React, { Component } from "react";
import "./SignUpForm.css";
import axios from "axios";
import { USER_URL } from "../../constants";

export default class SignUpForm extends Component {
  // class field syntax

  state = {
    username: "",
    email: "",
    password1: "",
    password2: "",
    error: "",
  };

  // axios.post(API_URL, this.state).then(() => {
  //   this.props.resetState();
  //   this.props.toggle();
  // });

  handleSubmit = async (evt) => {
    evt.preventDefault();
    // try {
    //   const formData = { ...this.state };
    //   delete formData.error;
    //   delete formData.confirm;
      axios.post(`${USER_URL}registration/`, this.state).then(() => {
        this.props.setUser();
        // this.props.toggle();
      });
      // const user = await signUp(formData);
      // console.log(user)
      // this.props.setUser(user);
    // } catch {
    //   this.setState({ error: "Sign Up Failed - Try Again" });
    // }
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  render() {
    const disable = this.state.password1 !== this.state.password2;
    return (
      <div>
        <div className="form-container">
          <h1>Trasia Watches Store</h1>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />

            <input
              type="password"
              placeholder="Password"
              name="password1"
              value={this.state.password1}
              onChange={this.handleChange}
              required
            />

            <input
              type="password"
              placeholder="Confirm"
              name="password2"
              value={this.state.password2}
              onChange={this.handleChange}
              required
            />
            <button type="submit" disabled={disable}>
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
