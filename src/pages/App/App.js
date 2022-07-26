import './App.css';
import Header from '../../components/Header/Header';
import HomeStaff from '../HomePage/HomeStaff';
import StaffProfile from '../StaffProfile/StaffProfile';
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import StaffProfile from '../StaffProfile/StaffProfile';
// import { Navbar, Collapse, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarToggler } from 'reactstrap';

function App() {
  // const [isOpen, setIsOpen] = useState(false)
  // const toggle = () => setIsOpen(!isOpen)
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState(getUser());
  return (
    <Fragment>
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
              element={<StaffProfile user={user} />}
            ></Route>
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            {/* <Route path="/*" element={<Navigate to="/HomeStaff" />} /> */}
          </Routes>
    </Fragment>
  );
}

export default App;
