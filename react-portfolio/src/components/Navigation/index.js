import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Navigation(props) {
  const { setCurrentComponent, currentComponent } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentComponent);
  }, [currentComponent]);

  return (
    <header>
      <nav className="bg-white text-black">
        <ul className="flex flex-wrap justify-between align-center list-none mt-6 pb-6 mx-24 font-bold text-4xl font-shalimar">
          <h1 className="text-5xl xs:mb-4 md:mb-0 font-windsong">
            <a
              data-testid="link"
              href="#home"
              className="hover:opacity-60"
              onClick={() => setCurrentComponent("about")}
            >
              Paige Caiozzo
            </a>
          </h1>
          <div className="xs:pt-2 flex flex-wrap">
            <li className="mx-6">
              <a
                data-testid="about"
                href="#about"
                onClick={() => setCurrentComponent("about")}
                className="hover:text-orange-500"
              >
                About Me
              </a>
            </li>
            <li className="mx-6">
              <a
                data-testid="contact"
                href="#contact"
                onClick={() => setCurrentComponent("contact")}
                className="hover:text-orange-500"
              >
                Contact
              </a>
            </li>
            <li className="mx-6">
              <a
                data-testid="resume"
                href="#resume"
                onClick={() => setCurrentComponent("resume")}
                className="hover:text-orange-500"
              >
                Resume
              </a>
            </li>
            <li className="mx-6">
              <a
                data-testid="project"
                href="#project"
                onClick={() => setCurrentComponent("project")}
                className="hover:text-orange-500"
              >
                Projects
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
