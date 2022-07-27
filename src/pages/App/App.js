import './App.css';
import Header from '../../components/Header/Header';
import HomeStaff from '../HomePage/HomeStaff';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import StaffProfile from '../StaffProfile/StaffProfile';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
// import { Navbar, Collapse, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarToggler } from 'reactstrap';

function App() {
  // const [isOpen, setIsOpen] = useState(false)
  // const toggle = () => setIsOpen(!isOpen)
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState(getUser());
  const [watch, setWatch] = useState('');

  return (
    <Fragment>
    {user ? (
      <>
      <NavBar user={user} setUser={setUser} />
      {/* <Header /> */}
      {/* <Home /> */}
      <Routes>
            <Route
              path="/managedb"
              element={<HomeStaff user={user} />}
            ></Route>
            <Route
              path="/staffprofile"
              element={<StaffProfile user={user} setUser={setUser} />}
            ></Route>
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            {/* <Route path="/*" element={<Navigate to="/HomeStaff" />} /> */}
          </Routes>
          </>
          ) : (
            <Routes>
              <Route path="/" element={<AuthPage setUser={setUser} />} />
            </Routes>
            // <AuthPage setUser={setUser} />
          )}
    </Fragment>
  );
}

export default App;
