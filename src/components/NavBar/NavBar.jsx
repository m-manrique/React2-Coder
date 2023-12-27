import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand  as={Link} to="/">Tekus</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll >           
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/category/electronics">Electronics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/jewelery">Jewelery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/men's clothing">Men's</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/women's clothing">Women's</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
