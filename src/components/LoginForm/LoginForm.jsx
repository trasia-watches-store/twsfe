import { useState } from 'react';
import './LoginForm.css';
import axios from "axios";
import { USER_URL } from "../../constants";

export default function LoginForm({ setUser, getUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log(credentials)
    axios.post(`${USER_URL}login/`, credentials)
    .then((response) =>  {
      console.log(response)
      getUser(response.data.key)
    })
  }

  // async function getUser(key) {
  //   localStorage.clear()
  //   localStorage.setItem('token', key)
  //   axios.get(`${USER_URL}user/`, 
  //     {headers: {
  //       'Authorization': `Token ${key}`
  //     }}).then((response) => setUser(response.data))
  // }

  return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
          <h1>Trasia Watches Store</h1>
        <form autoComplete="off" >
          <label></label>
          <input type="text" placeholder='Email' name="email" value={credentials.email} onChange={handleChange} required />
          <label></label>
          <input type="password" placeholder='Password' name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}