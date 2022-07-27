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
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
      axios.post(`${USER_URL}registration/`, this.state)
      // .then((response) =>  this.getUser(this.response.data.key))
      .then((response) =>  this.getUser(response.data.key))
  };

  async getUser(key) {
    localStorage.clear()
    localStorage.setItem('token', key)
    axios.get(`${USER_URL}user/`, 
      {headers: {
        'Authorization': `Token ${key}`
      }}).then((response) => this.props.setUser(response.data))
  }

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
