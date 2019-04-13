import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Banner from './components/Banner';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <Banner/>
      </Fragment>
    );
  }
}

export default App;
