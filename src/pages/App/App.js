import './App.css';
import Header from '../../components/Header/Header';
import HomeStaff from '../HomePage/HomeStaff';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import StaffProfile from '../StaffProfile/StaffProfile';
import { Link } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios"
import { USER_URL } from "../../constants";
import HomeWatches from '../HomePage/HomeWatches';
// import { Navbar, Collapse, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarToggler } from 'reactstrap';

function App() {
  const [user, setUser] = useState(null);
  const [watch, setWatch] = useState('');
  const auth = localStorage.getItem('token');
  // console.log(auth);

  useEffect(() => {
    if (auth) {
      getUser(auth)
    }
  }, [auth]);
let csrftoken
  async function getUser(key) {
    localStorage.clear()
    !key || key == undefined ? localStorage.clear() : 
    localStorage.setItem('token', key)
    axios.get(`${USER_URL}user/`, 
      {headers: {
        'Authorization': `Token ${key}`
      }}).then((response) => {
        // csrftoken = response.cookies['csrftoken']
        // console.log(response.cookies)
        setUser(response.data)
      })
  }

  return (
    <Fragment>
    {user ? (
      <>
      <NavBar user={user} setUser={setUser} />
      {/* <Header /> */}
      {/* <Home /> */}
      <Routes>
            <Route
              path="/home"
              element={<HomeWatches user={user} />}
            ></Route>
            <Route
              path="/managedb"
              element={<HomeStaff user={user} />}
            ></Route>
            <Route
              path="/staffprofile"
              element={<StaffProfile user={user} setUser={setUser} />}
            ></Route>
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
          </>
          ) : (
            <Routes>
              <Route path="/" element={<AuthPage setUser={setUser} getUser={getUser} user={user}/>} />
              <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
            // <AuthPage setUser={setUser} />
          )}
    </Fragment>
  );
}

export default App;
