import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <Container className="align-self-center mt-3 mt-md-0 " id="about">
      <Row>
        <Col xs={12} md={4} lg={3} className="justify-content-center mb-3">
          <img
            src={require("/Users/Anthony/Desktop/challenges/20-Challenge/Portfolio_Paige/src/assets/images/project/weddingdate.jpg")}
            alt="Paige Caiozzo"
            className="border border-dark "
          />
        </Col>
        <Col xs={12} md={8} lg={7}>
          <h2 className="aboutme">About Me</h2>
          <p className="aboutmeinfo">
            <p className="hello">Hello,</p><p className="name">My name is Paige. </p>I am a
            Michigan State University Coding Bootcamp student. I am currently 33
            years old. I have been married to my husband for 5 years and we have
            3 amazing children together!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
