import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
    </Fragment>
  );
}

export default App;
