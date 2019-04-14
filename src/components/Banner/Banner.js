import React, { Component } from 'react';
import Navbar from '../Navbar';

import "./Banner.css";

class Banner extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid" id= "backImg" style={ { backgroundImage: "url('images/Lake-Isabell.jpg')" } }>
            <Navbar/>
                <div className="container center" id="content">
                    <h1 className="text text-center">Patrick Neff</h1>
                    <h2 className="text text-center">Full Stack Web Developer</h2>
                </div>
                <div class= "container center">
                    <h3 className="text text-center">About Me</h3>
                    <p class="text text-center">
                    I am a high performing, goal oriented, individual with leadership skills and a willingness to learn new things. I excel at working with others in collaborative efforts and finding solutions to difficult problems using a variety of methods. Some of my greatest attributes are my discipline, strategic planning, pattern recognition, and forecasting.
                    </p>
                    <p class="text text-center">My goal with every new technology I learn is to bring my passion for coding to find a way to fill some void or solve some problem in our society. I think that the potential to help others with what I’m learning is one of my strongest motivators. I have a long track record of learning new things and taking up difficult disciplines as hobbies. I enjoy playing music- my main instrument is the violin but will try anything I can get my hands on. I have also dedicated myself to martial arts and feel that this has supported my ability to handle difficult tasks and face every challenge with tenacity.
                    </p>
                </div>
            </div>
        );
      }
    }

export default Banner;