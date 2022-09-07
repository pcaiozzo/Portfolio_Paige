import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import "./App.css";
import "../src/style.scss"

function App() {
  const [pages] = useState([
    { name: "about" },
    { name: "portfolio" },
    { name: "contact" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [projects] = useState([
    {
      title: "Post It Here",
      link: "https://post-it22.herokuapp.com/",
      repo: "https://github.com/pcaiozzo/post-it-here",
      img: "post-it-here.png",
    },
    {
      title: "Weather For You",
      link: "https://pcaiozzo.github.io/Weather-For-You/",
      repo: "https://github.com/pcaiozzo/Weather-For-You",
      img: "WeatherApp.png",
    },
    {
      title: "Event Buddy",
      link: "https://murmuring-springs-16959.herokuapp.com/",
      repo: "https://github.com/cmskorcz/bootcamp_project_2",
      img: "EventBuddy.png",
    },
    {
      title: "Portfolio of Paige",
      link: "https://pcaiozzo.github.io/Portfolio-of-Paige/",
      repo: "https://github.com/pcaiozzo/Portfolio-of-Paige",
      img: "portfolio.jpg",
    },
    {
      title: "Work Day Scheduler",
      link: "https://pcaiozzo.github.io/Work-Scheduler/",
      repo: "https://github.com/pcaiozzo/Work-Scheduler",
      img: "WorkScheduler.png",
    },
    {
      title: "Lets Quiz",
      link: "https://pcaiozzo.github.io/lets-quiz/",
      repo: "https://github.com/pcaiozzo/lets-quiz",
      img: "Quiz.png",
    },
  ]);

  return (
    <>
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main className="d-flex">
        {currentPage.name === "about" && <About />}
        {currentPage.name === "portfolio" && <Portfolio projects={projects} />}
        {currentPage.name === "contact" && <ContactForm />}
      </main>
      <Footer />
    </>
  );
}

export default App;
