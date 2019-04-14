import React, { Component } from 'react';

const navStyle = {
    position: 'absolute',
    top: '10px',
}

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light" style={ navStyle }>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link text-white" href="https://github.com/discopat1">Github</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="https://www.linkedin.com/in/patrick-neff">LinkedIn</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="https://docs.google.com/document/d/1Y3HIRPhOVwyMJQAm2LDAEu9JxrexISBP_Q29phhZoJI/edit?usp=sharing">Resume</a>
                </li>
              </ul>
            </div>
          </nav>
        );
      }
    }

export default Navbar;
