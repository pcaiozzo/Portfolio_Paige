import React from "react";
import self from "../../assets/images/beach.jpg";

function About() {
  return (
    <section className="flex flex-wrap justify-center">
      <div className="text-2xl w-1/2 mt-10 ml-10">
        <h1
          id="about"
          className="text-4xl md:mt-24 first-letter:font-windsong first-letter:text-7xl"
        >
          H i, I'm Paige Caiozzo.
        </h1>
        <p className="mt-12">
          I am currently a student at Michigan State University Coding Bootcamp.
        </p>
        <p className="mt-6">
          Starting this fall I will have completed a full-stack developer bootcamp to obtain
          critical skills to meet future demands.
        </p>
        <p className="mt-6">
          I am currently 33 years old, married to my amazing husband Anthony for 5 years and I have three beautiful children. 
        </p>
      </div>
      <img
        src={self}
        alt="self"
        className="h-80 opacity-80 md:mt-40 ml-12 flex align-bottom"
      ></img>
    </section>
  );
}

export default About;