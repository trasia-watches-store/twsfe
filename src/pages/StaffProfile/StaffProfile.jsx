import { useState } from 'react';
import axios from "axios";
import { USER_URL } from "../../constants";

export default function StaffProfile({ user, setUser }) {
    // const [username, setUsername] = useState(user.name);
    console.log(user)
    const [username, setUsername] = useState('');
    const [Pchanged, setPchanged] = useState(false);
    const [Uchanged, setUchanged] = useState(false);

    const [passwords, setPasswords] = useState({
        oldPassword: "",
        newPassword: ""
    });

    
    function handleChangeUserName(evt) {
        // console.log("new username: " + evt.target.value);
        setUsername(evt.target.value);
    }

    async function handleSubmitUserName(evt) {
        evt.preventDefault();
        const key = localStorage.getItem('token');
        // console.log("username: " + username);
        axios.put(`${USER_URL}user/`, {username: username}, {
            headers: {
                'Authorization': `Token ${key}`
            }
        }).then((response) => {
            // console.log(response.data);
            setUser(response.data);
            setUchanged(true);
        })
    }

    function handleChangePassword(evt) {
        // console.log("new password: " + evt.target.value);
        setPasswords({ ...passwords, [evt.target.name]: evt.target.value });
    }
    async function handleSubmitPassword(evt) {
        evt.preventDefault();
        try {
            // console.log("passwords: ", passwords);
            user.oldPassword = passwords.oldPassword;
            user.newPassword = passwords.newPassword;
            // console.log("user", user);
            // const newUser = await usersService.changePassword(user);
            // setUser(newUser);
            setPchanged(true)
            alert('Change password success');
        } catch {
            //   setError('Change username failed - Try Again');
            alert('Change password failed - Try Again');
        }
    }

    return (
        <div className="user-setting">
            <h3>Profile Setting</h3>

            <form autoComplete="off" className="form-username" onSubmit={handleSubmitUserName}>
                <label>New Username</label>
                <input type="text" placeholder={user.username} name="username" value={username} onChange={handleChangeUserName} required />
                {Uchanged && <p>Username changed to {username}</p>}
                <button type="submit" >Submit</button>
            </form>
            <form autoComplete="off" className="form-password" onSubmit={handleSubmitPassword}>
                <label>Password</label>
                <input type="text" placeholder="Old password" name="oldPassword" required onChange={handleChangePassword} />
                <label>New password</label>
                <input type="text" placeholder="New password" name="newPassword"
                    onChange={handleChangePassword} required />
                    {Pchanged && <p>Password changed</p>}
                <button type="submit" >Submit</button>
            </form>
            {/* add dummy space to overcome the sticky footer */}
            <div className="dummy" />
        </div>
    );




}
