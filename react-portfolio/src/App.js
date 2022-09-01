import React, { useState } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import ContactForm from "./components/Contact";

function App() {
  const [currentComponent, setCurrentComponent] = useState("about");

  return (
    <div className="bg-gray-300 text-black h-screen xs:h-max font-sans">
      <Navigation
        setCurrentComponent={setCurrentComponent}
        currentComponent={currentComponent}
      ></Navigation>
      <main className="bg-gray-300">
        {currentComponent === "about" && <About />}
        {currentComponent === "contact" && <ContactForm />}
      </main>
    </div>
  );
}

export default App;
