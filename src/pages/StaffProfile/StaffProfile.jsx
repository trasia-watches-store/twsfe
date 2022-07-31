import { useState } from 'react';
import axios from "axios";
import { USER_URL } from "../../constants";
import './StaffProfile.css'

export default function StaffProfile({ user, setUser }) {
    const key = localStorage.getItem('token');
    const [username, setUsername] = useState('');
    const [Pchanged, setPchanged] = useState(false);
    const [Uchanged, setUchanged] = useState(false);
    const [passwords, setPasswords] = useState({
        old_password: "",
        new_password1: "",
        new_password2: ""
    });

    
    function handleChangeUserName(evt) {
        // console.log("new username: " + evt.target.value);
        setUsername(evt.target.value);
    }

    async function handleSubmitUserName(evt) {
        evt.preventDefault();
        // console.log("username: " + username);
        axios.put(`${USER_URL}user/`, {"username": username}, {
            headers: {
                'Authorization': `Token ${key}`
            }
        }).then((response) => {
            // console.log(response.data);
            setUser(response.data);
            setUchanged(true);
        }).catch((error) => { // removed these lines for more errors handling options
            // console.log(error);
            setUchanged(false);
        })
    }


    function handleChangePassword(evt) {
        // console.log("new password: " + evt.target.value);
        setPasswords({ ...passwords, [evt.target.name]: evt.target.value });
    }
    async function handleSubmitPassword(evt) {
        evt.preventDefault();
        axios.post(`${USER_URL}password/change/`, passwords, {
            headers: {
                'Authorization': `Token ${key}`
            }
        }).then((response) => {
            // setUser(response.data);
            console.log(response);
            setPchanged(true);
        })
    }

    return (
        <div className="user-setting">
            <h3 className='text-center'>Profile Setting</h3>

            <form autoComplete="off" className="form-username" onSubmit={handleSubmitUserName}>
                <label>New Username</label>
                <input type="text" placeholder={user.username} name="username" value={username} onChange={handleChangeUserName} required />
                {Uchanged ? <p>Username changed to {username}</p> : <p className='username-rule'>150 characters or fewer. Letters, digits and @/./+/-/_ only.'</p>} 
                <button type="submit" >Submit</button>
            </form>
            <form autoComplete="off" className="form-password" onSubmit={handleSubmitPassword}>
                <label>Password</label>
                <input type="text" placeholder="Old password" name="old_password" required onChange={handleChangePassword} />
                <label>New password</label>
                <input type="text" placeholder="New password" name="new_password1"
                    onChange={handleChangePassword} required />
                <input type="text" placeholder="Confirm new password" name="new_password2"
                    onChange={handleChangePassword} required />
                    {Pchanged && <p>Password changed</p>}
                <button type="submit" >Submit</button>
            </form>
            {/* add dummy space to overcome the sticky footer */}
            <div className="dummy" />
        </div>
    );




}
