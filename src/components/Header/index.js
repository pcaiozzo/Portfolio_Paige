import React from "react";
import Container from "react-bootstrap/Container";
import Navigation from "../Navigation";

function Header({ pages, currentPage, setCurrentPage }) {
  return (
    <>
      <h1 className="header py-3 text-light mb-0 text-center text-md-start">
        <Container>Paige Caiozzo</Container>
      </h1>
      <Navigation
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default Header;
