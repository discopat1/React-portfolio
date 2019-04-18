import React, { Component } from 'react';

const schedStyle = {
    paddingTop: '100px',
    paddingBottom: '100px',
    color: 'sienna'
}


class Schedule extends Component {
    render() {
        return (
            <div class= "container center" style={schedStyle}>
                <h1 class="text-center">Want to get ahold of me?</h1>
               <a href="https://calendly.com/pbneff"><button type="button" class="container center btn btn-outline-secondary btn-lg">Schedule an appointment</button></a>
            </div>
        );
      }
    }

export default Schedule;
