import React from "react";

function Resume() {
    return (
        <section className="container">
            <h1 className="small ease-right-expand categories">Skills</h1>
            <br/>
            <section className="columns is-mobile">
                <span className="column">
                    <ul className="card-body">
                        <li className="card-text">HTML, CSS, JavaScript</li>
                        <li className="card-text">React, Angular, TypeScript</li>
                        <li className="card-text">SQL, C#, Visual Basic</li>
                        <li className="card-text">.NET development</li>
                        <li className="card-text">Version Control</li>
                    </ul>
                </span>
                <span className="column">
                    <button className="download">
                        <a href="assets/images/resume.pdf" download>Download Resume</a>
                    </button>
                </span>
            </section>
        </section>
    )
}

export default Resume;