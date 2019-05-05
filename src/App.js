import React, { Component, Fragment } from 'react';
import './App.css';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Schedule from './components/Schedule';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Banner/>
        <Skills/>
        <Projects/>
        <Schedule/>
      </Fragment>
    );
  }
}

export default App;
