import React, { Component } from 'react';
import ProjectList from './ProjectList';

import "./Projects.css";

class Projects extends Component {
    render() {
        return (
            <div class="container-fluid bg-3 text-center">
                <h3>A snapshot of some of my past and current projects</h3>
                <div class="row">
                    <div class="col-sm-3">
                       <h3>{ProjectList.Name}</h3>
                    </div>
                </div>
            </div>
        );
      }
    }

export default Projects;
