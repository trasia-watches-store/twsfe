import './App.css';
import Header from '../../components/Header';
import Home from '../../components/Home';
// import NavBar from './components/NavBar/NavBar.js';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
// import { Navbar, Collapse, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarToggler } from 'reactstrap';

function App() {
  // const [isOpen, setIsOpen] = useState(false)
  // const toggle = () => setIsOpen(!isOpen)
  // const [user, setUser] = useState(getUser());
  return (
    <Fragment>
      {/* <NavBar user={user} setUser={setUser} /> */}
      <Header />
      <Home />
    </Fragment>
  );
}

export default App;
