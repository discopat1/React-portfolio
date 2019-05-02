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
    HomeUrl: "https://smitty10010.github.io/team-5-project1/",
    Name: "Crag",
    Image: "images/crag2.png",
    GitHub: "https://github.com/smitty10010/team-5-project1",
    Description1: "Web application built to find rock climbing areas based on experience and goals. Group project for users interested in reducing the barrier of entry to the rock climbing community.",
    Description2: "Built with HTML, JQuery, Materialize, Google Map API, OpenWeatherMap API, Mountain Project API, and Meetup API."
},
{
    HomeUrl: "https://blooming-island-62700.herokuapp.com/",
    Name: "GOT Friend Finder",
    Image: "images/got-screenshot.png",
    GitHub: "https://github.com/discopat1/Friend-finder-express",
    Description1: "Friend matching web application. User is first given the opportunity to download a picture of themselves and is then asked to answer some survey questions. The application will then pair the user with their best matched Game of Thrones character based on their answers.",
    Description2: "Built with HTML, NodeJS, Express, and Bootstrap."
},
];


class Projects extends Component {


    renderProjectList = project => (
        <React.Fragment>
            <div class="col-sm-6 work  d-flex justify-content-center">
                <div class="card" style={{width: '75%'}}>
                <img src={project.Image} class="img-responsive img-work" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">{project.Name}</h5>
                        <p>{project.Description1}</p>
                        <p>{project.Description2}</p>
                        <div class="row d-flex justify-content-between align-items-end">
                            <a href={project.HomeUrl} class="btn btn-outline-secondary">Application</a>
                            <a href={project.GitHub} class="btn btn-outline-secondary" style={{width: '22%'}}>Repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )


    render() {
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
