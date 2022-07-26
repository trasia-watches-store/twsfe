import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
// import { Navbar, Collapse, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarToggler } from 'reactstrap';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Home />
    </Fragment>
  );
}

export default App;
