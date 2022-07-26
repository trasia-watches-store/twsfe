import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Header />
      <Home />
    </Fragment>
  );
}

export default App;
