import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section className="flex justify-center">
      <h1 data-testid="h1tag" className="mt-20 text-5xl font-bold text-white">
        Contact me
      </h1>

      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="justify-center mt-48 mr-24 font-bold text-2xl text-right"
      >
        <div className="mt-2">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
            className="w-72"
          />
        </div>

        <div className="mt-2">
          <label htmlFor="email">Email address: </label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
            className="w-72"
          />
        </div>

        <div className="mt-2">
          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
            className="w-72"
          />
        </div>

        {errorMessage && (
          <div>
            <p className="error-text mt-4 text-red-500 first-letter:uppercase text-lg text-center">
              {errorMessage}
            </p>
          </div>
        )}
        <button
          data-testid="button"
          type="submit"
          className="shadow-xl mt-4 rounded-md bg-orange-600 border-2 hover:bg-orange-700 hover:text-gray-100 border-black px-2 font-bold text-white"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
