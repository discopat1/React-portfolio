import React, { Component } from 'react';
// import ProjectList from './ProjectList';

import "./Projects.css";

const ProjectList = [{
    HomeUrl: "https://pad-holder.herokuapp.com/",
    Name: "Virtual Pad Holder",
    Image: "images/pad-screenshot.png",
    GitHub: "https://github.com/discopat1/Pad-holder-app",
    Description1: "Web application for Boxers, Kickboxers, MMA fighters, or anyone looking to improve their reaction time while doing bag-work or shadow boxing. Includes a round timer and uses speech synthesis to call out classic fight combinations during the rounds!",
    Description2: "Built with ReactJS, MongoDB, NodeJS, Express, and Bootstrap."
},
{
    HomeUrl: "https://workoutappsrevenge.herokuapp.com/",
    Name: "The Workout App",
    Image: "images/Workoutapp-screenshot.png",
    GitHub: "https://github.com/smitty10010/workoutappsrevenge",
    Description1: "Web application designed to provide a strength and conditioning workout based on user input. Exercises, weight, sets, reps, plus history tracking is provided.",
    Description2: "Built with ReactJS, Material UI, Auth0, Node.JS, Express, Lodash, and Passport."
},
{
    HomeUrl: "https://workoutappsrevenge.herokuapp.com/",
    Name: "The Workout App",
    Image: "images/Workoutapp-screenshot.png",
    GitHub: "https://github.com/smitty10010/workoutappsrevenge",
    Description1: "Web application designed to provide a strength and conditioning workout based on user input. Exercises, weight, sets, reps, plus history tracking is provided.",
    Description2: "Built with ReactJS, Material UI, Auth0, Node.JS, Express, Lodash, and Passport."
},
{
    HomeUrl: "https://workoutappsrevenge.herokuapp.com/",
    Name: "The Workout App",
    Image: "images/Workoutapp-screenshot.png",
    GitHub: "https://github.com/smitty10010/workoutappsrevenge",
    Description1: "Web application designed to provide a strength and conditioning workout based on user input. Exercises, weight, sets, reps, plus history tracking is provided.",
    Description2: "Built with ReactJS, Material UI, Auth0, Node.JS, Express, Lodash, and Passport."
},
];


class Projects extends Component {

    constructor(){
        super();

        this.state = {
           overlay: false
        }
    }

    overLayOn(){
       this.setState({overlay: true})
    }

    overLayOff() {
        this.setState({overlay: false})
    }

    toggle() {
        return this.state.overlay ? 'block' : 'none';
    }

    renderProjectList = project => (
        <React.Fragment>
            <div class="col-sm-6 work">
                <p>{project.Name}</p>
                <a href={project.HomeUrl}><img src={project.Image} class="img-responsive img-work" alt=""/></a>
                    <div class="container info-button">
                        <button class="primary" onClick={this.overLayOn.bind(this)}>Info</button>
                    </div>
                    <div className="overlay" style={{display: this.toggle()}} onClick={this.overLayOff.bind(this)}>
                        <div className="over-text">
                            <p>{project.Description1}</p>
                            <p>{project.Description2}</p>
                        </div>
                    </div>
                    
            </div>

        </React.Fragment>
    )


    render() {
        console.log(this.state.overlay)
        return (
            <div class="container-fluid bg-3 text-center">
                <h3>A snapshot of some of my past and current projects</h3>
                <div class="row">
                    {ProjectList.map(this.renderProjectList)}
                </div>
            </div>
        );
      }
    }

export default Projects;
