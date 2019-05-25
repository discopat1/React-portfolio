import React, { Component } from 'react';

import './Videos.css';

class Videos extends Component {
    render() {
        return (
            <div class="container-fluid bg-3 text-center">
                <h3>Some videos of my applications in use</h3>
                <div class="row" id= "backImg" style={ { backgroundImage: "url('images/Lake-Isabell.jpg')" } }>
                <div class="col-sm-4">
                    <iframe title="pad-holder-app" width="560" height="315" src="https://www.youtube.com/embed/EcNsjJVZCFQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-sm-4">
                    <iframe title="workout-app" width="560" height="315" src="https://www.youtube.com/embed/i8IRyNGtYQs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-sm-4">
                    <iframe title="crag-presentation" width="560" height="315" src="https://www.youtube.com/embed/Vwdch4Oj5Dc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>
            </div>
            )
        }
}

export default Videos;