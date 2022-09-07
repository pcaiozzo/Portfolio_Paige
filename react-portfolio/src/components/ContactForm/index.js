import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleValidation = (e) => {
    e.preventDefault();
    if (!e.target.value.length) {
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validated) {
      e.stopPropagation();
      setShowError(true);
    } else {
      setShow(true);
    }
  };

  return (
    <Container className="my-3">
      {show && (
        <Alert
          variant="success"
          onClose={() => setShow(false)}
          dismissible
          className="text-center"
        >
          <Alert.Heading>Thank you!</Alert.Heading>
        </Alert>
      )}
      {showError && (
        <Alert
          variant="danger"
          onClose={() => setShowError(false)}
          dismissible
          className="text-center"
        >
          <Alert.Heading>Make sure everything is filled out.</Alert.Heading>
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <h2 className="contact">Contact Form</h2>
          <Form noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Name"
                onBlur={handleValidation}
              />

              <Form.Control.Feedback type="invalid">
                Enter your name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks awesome!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter Email"
                onBlur={handleValidation}
              />

              <Form.Control.Feedback type="invalid">
                Enter your email!
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks Great!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                required
                rows={5}
                onBlur={handleValidation}
              />

              <Form.Control.Feedback type="invalid">
                Enter a message.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks Great!</Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
