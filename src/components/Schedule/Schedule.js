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
                <h1 class="text-center">Schedule an appointnment with me</h1>
            </div>
        );
      }
    }

export default Schedule;
