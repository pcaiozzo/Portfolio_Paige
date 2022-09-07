import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { capitalizeFirstLetter } from "../utils/helpers";
import pdf from "/Users/Anthony/Desktop/challenges/20-Challenge/Portfolio_Paige/react-portfolio/src/assets/images/Resume(2).pdf";

function Navigation(props) {
  const { pages = [], currentPage, setCurrentPage } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  });
  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          onClick={window.location.reload}
          href="."
          className="d-none d-md-inline"
        >
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {pages.map((page) => (
              <Nav.Link key={page.name} onClick={() => setCurrentPage(page)}>
                {capitalizeFirstLetter(page.name)}
              </Nav.Link>
            ))}
            <Nav.Link key="resume" href={pdf} target="_blank" rel="noreferrer">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
