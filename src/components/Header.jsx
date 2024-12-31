import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="bg-info position-fixed w-100" style={{ zindex: 1 }}>
        <Container>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Navbar.Brand className="fw-bold" style={{ color: "white" }}>
              <i class="fa-solid fa-music me-2"></i>
              Media Player
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
