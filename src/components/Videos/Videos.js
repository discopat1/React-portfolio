import React, { Component } from 'react';

import './Videos.css';

class Videos extends Component {
    render() {
        return (
            <div class="row" id= "backImg" style={ { backgroundImage: "url('images/Lake-Isabell.jpg')", marginTop: "80px" } }>
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
            )
        }
}

export default Videos;