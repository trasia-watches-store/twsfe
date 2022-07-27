import { useState } from 'react';
import './LoginForm.css';
import axios from "axios";
import { USER_URL } from "../../constants";

export default function LoginForm({ setUser }) {
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
    // try {
    // //   const user = await usersService.login(credentials);
    // //   setUser(user);
    axios.post(`${USER_URL}login/`, credentials).then(() => {
      setUser();
      console.log(credentials.email + " logged in successfully");
      
      // this.props.toggle();
    });
    // } catch {
    //   setError('Log In Failed - Try Again');
    // }
  }

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