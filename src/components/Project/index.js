import React from "react";

function Project(props) {
return (
    <section className="scroll project">
    <section className="project-container">
        <section className="project-items">

        {props.projects.map((project) => (
            <section className="project-display" key={project.id}>
            <section className="overlay hidden">
                <section className="project-info">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                    <p className="project-github">
                    <span className="links">
                        <a
                        href={project.deployed}
                        className="portfolio-link button text-dark display-"
                        >
                        View Project
                        </a>
                    </span>
                    <span className="links">
                    <a href={project.github}>
                        <img
                        className="social-icons"
                        src="assets/icons/github.png"
                        alt="Github"
                        />
                    </a>
                    </span>
                </p>
                </section>
            </section>
            </section>
        ))}
        </section>
    </section>
    </section>
);
}

export default Project;