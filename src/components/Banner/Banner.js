import React, { Component } from 'react';

import "./Banner.css";

class Banner extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container row">
                    <h1 class="col">Patrick Neff</h1>
                    <img class="col w3-cicle" src={"images/Head-shot-long-hair.jpg"} alt="headshot"/>
                </div>
            </div>
        );
      }
    }

export default Banner;