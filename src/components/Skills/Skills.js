import React, { Component } from 'react';

import './Skills.css';


class Skills extends Component {
    render() {
        return (
            <div class='container'>
                <div class='row skills justify-content-center text-center'>
                    <i class="fab fa-node-js fa-3x img-responsive icon col-1"></i>
                    <i class="fab fa-react fa-3x img-responsive icon col-1"></i>
                    <i class="fas fa-database img-responsive icon fa-3x col-1"></i>
                    <i class="fab fa-html5 fa-3x img-responsive icon col-1"></i>
                    <i class="fab fa-css3-alt fa-3x img-responsive icon col-1"></i>
                </div>
            </div>
        );
      }
    }

export default Skills;
