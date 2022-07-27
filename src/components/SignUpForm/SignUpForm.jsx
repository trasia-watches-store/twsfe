import { useState } from 'react';
import './SignUpForm.css';
import axios from "axios";
import { USER_URL } from "../../constants";

export default function SignUpForm({ setUser, getUser  }) {
  const [dataForm, setDataForm] = useState({
    email: '',
    username: '',
    password1: '',
    password2: ''
  });

  function handleChange(evt) {
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    axios.post(`${USER_URL}registration/`, dataForm)
    .then((response) =>  getUser(response.data.key))
    // .then((response) =>  console.log(response.data.key))
  }


  return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
          <h1>Trasia Watches Store</h1>
        <form autoComplete="off" >
          <label></label>
          <input type="text" placeholder='Username' name="username" value={dataForm.username} onChange={handleChange} required />
          <label></label>
          <input type="text" placeholder='Email' name="email" value={dataForm.email} onChange={handleChange} required />
          <label></label>
          <input type="password" placeholder='Password' name="password1" value={dataForm.password1} onChange={handleChange} required />
          <label></label>
          <input type="password" placeholder='Confirm Password' name="password2" value={dataForm.password2} onChange={handleChange} required />
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}