import React, { Component } from 'react';
// import ProjectList from './ProjectList';

import "./Projects.css";

const ProjectList = [{
    HomeUrl: "https://pad-holder.herokuapp.com/",
    Name: "Virtual Pad Holder",
    Image: "images/pad-react.png",
    GitHub: "https://github.com/discopat1/Pad-holder-app",
    Description1: "Web application for Boxers, Kickboxers, MMA fighters, or anyone looking to improve their reaction time while doing bag-work or shadow boxing. Includes a round timer and uses speech synthesis to call out classic fight combinations during the rounds!",
    Description2: "Built with ReactJS, MongoDB, NodeJS, Express, and Bootstrap."
},
{
    HomeUrl: "https://workoutappsrevenge.herokuapp.com/",
    Name: "The Workout App",
    Image: "images/workout-react.png",
    GitHub: "https://github.com/smitty10010/workoutappsrevenge",
    Description1: "Web application designed to provide a strength and conditioning workout based on user input. Exercises, weight, sets, reps, plus history tracking is provided.",
    Description2: "Built with ReactJS, Material UI, Auth0, Node.JS, Express, Lodash, and Passport."
},
{
    HomeUrl: "https://smitty10010.github.io/team-5-project1/",
    Name: "Crag",
    Image: "images/crag-react.png",
    GitHub: "https://github.com/smitty10010/team-5-project1",
    Description1: "Web application built to find rock climbing areas based on experience and goals. Group project for users interested in reducing the barrier of entry to the rock climbing community.",
    Description2: "Built with HTML, JQuery, Materialize, Google Map API, OpenWeatherMap API, Mountain Project API, and Meetup API."
},
{
    HomeUrl: "https://discopat1.github.io/BestofBoth/",
    Name: "Best of Both Worlds Wellness",
    Image: "images/bestofboth.png",
    GitHub: "https://github.com/BestofBoth",
    Description1: "Professional website for the business “Best of Both Worlds Wellness.” Informational site about the business with links to schedule appointments, shop for supplements, and watch informational videos.",
    Description2: "Built with Materialize."
},
{
    HomeUrl: "https://blooming-island-62700.herokuapp.com/",
    Name: "GOT Friend Finder",
    Image: "images/got-react.png",
    GitHub: "https://github.com/discopat1/Friend-finder-express",
    Description1: "Friend matching web application. User is first given the opportunity to download a picture of themselves and is then asked to answer some survey questions. The application will then pair the user with their best matched Game of Thrones character based on their answers.",
    Description2: "Built with HTML, NodeJS, Express, and Bootstrap."
},
{
    HomeUrl: "https://github.com/discopat1/React-native-navigate",
    Name: "Grapplers Paradise",
    Image: "images/grappler-screenshot.png",
    GitHub: "https://github.com/discopat1/React-native-navigate",
    Description1: "This is an ios application developed to help grappling athletes of all backgrounds and styles. The application can find grappling schools, seminars, and competitions nearby. There is also a screen that provides a list of various topics. Each item in the list links to a different set of videos.",
    Description2: "This application is built using React Native"
},
// {
//     HomeUrl: "https://discopat1.github.io/TriviaGame/",
//     Name: "Anatomy and Phyisiology Trivia",
//     Image: "images/A&P-react.png",
//     GitHub: "https://github.com/discopat1/TriviaGame/",
//     Description1: "This web application provides a basic Anatomy and Physiology Quiz. The user is given 3 multiple choice questions. Answer within the time limit and click submit or wait for time to expire and see your results.",
//     Description2: "Built with HTML, JS timers, and Bootstrap."
// },
{
    HomeUrl: "https://discopat1.github.io/Train-Activity/",
    Name: "Train Manager",
    Image: "images/train-manager.png",
    GitHub: "https://github.com/discopat1/Train-Activity",
    Description1: "Train schedule application. This website provides up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.",
    Description2: "Built with HTML, Moment.JS, Firebase, Javascript/Jquery, and Bootstrap."
},
{
    HomeUrl: "https://github.com/discopat1/Angular-todo",
    Name: "To Do App",
    Image: "images/to-do.png",
    GitHub: "https://github.com/discopat1/Angular-todo",
    Description1: "Simple To Do application. User can add new tasks, check or uncheck them, and delete them.",
    Description2: "Angular, Bootstrap, and Firebase"
},
];


class Projects extends Component {


    renderProjectList = project => (
        <React.Fragment>
            <div class="col-sm-6 work  d-flex justify-content-center">
                <div class="card" style={{width: '75%'}}>
                <img src={project.Image} class="card-img-top" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">{project.Name}</h5>
                        <p class="card-text">{project.Description1}</p>
                        <p>{project.Description2}</p>
                    </div>     
                    <div class="d-flex justify-content-between card-footer">
                        <a href={project.HomeUrl} class="btn btn-outline-secondary card-button">Application</a>
                        <a href={project.GitHub} class="btn btn-outline-secondary card-button">Repo</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )


    render() {
        return (
            <div class="container-fluid bg-3 text-center">
                <h3>A snapshot of some of my past and current projects</h3>
                <div id="backImg" style={ {backgroundImage: "url('images/cardboard.png')" } }>
                <div class="card-group" >
                    {ProjectList.map(this.renderProjectList)}
                </div>
                </div>
            </div>
        );
      }
    }

export default Projects;
