import React, { Component, Fragment } from 'react';
import './App.css';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Schedule from './components/Schedule';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Banner/>
        <Schedule/>
        <Projects/>
      </Fragment>
    );
  }
}

export default App;
