import React, { Component, Fragment } from 'react';
import './App.css';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Schedule from './components/Schedule';
import Skills from './components/Skills';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Banner/>
        <Skills/>
        <Projects/>
        <Schedule/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
