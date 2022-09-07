import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      id: 0,
      title: "Post It Here",
      image: "assets/images/kids.jpg",
      description:
        "An application where you can post notes and delete them as needed.",
      deployed: "https://post-it22.herokuapp.com/",
      github: "https://github.com/pcaiozzo/post-it-here",
    },
    {
      id: 1,
      title: "Weather For You",
      image: "assets/images/project/WeatherApp.png",
      description:
        "An application to see what the weather is in whatever city you desire.",
      deployed: "https://pcaiozzo.github.io/Weather-For-You/",
      github: "https://github.com/pcaiozzo/Weather-For-You",
    },
    {
      id: 2,
      title: "Event Buddy",
      image: "assets/images/project/EventBuddy.png",
      description:
        "An application be able to create events in your area and view other's events too.",
      deployed: "https://murmuring-springs-16959.herokuapp.com/",
      github: "https://github.com/cmskorcz/bootcamp_project_2",
    },
    {
      id: 3,
      title: "Portfolio of Paige",
      image: "assets/images/portfolio.png",
      description: "A portfolio.",
      deployed: "https://pcaiozzo.github.io/Portfolio-of-Paige/",
      github: "https://github.com/pcaiozzo/Portfolio-of-Paige",
    },
    {
      id: 4,
      title: "Work Day Scheduler",
      image: "assets/images/project/WorkScheduler.png",
      description: "An application where you can plan your work day.",
      deployed: "https://pcaiozzo.github.io/Work-Scheduler/",
      github: "https://github.com/pcaiozzo/Work-Scheduler",
    },
    {
      id: 5,
      title: "Lets Quiz",
      image: "assets/images/project/Quiz.png",
      description: "A simple coding quiz.",
      deployed: "https://pcaiozzo.github.io/lets-quiz/",
      github: "https://github.com/pcaiozzo/lets-quiz",
    },
  ];

  return (
    <section>
      <h1 className="large ease-right-expand categories">Projects</h1>
      <Project projects={projects} />
    </section>
  );
}

export default Portfolio;