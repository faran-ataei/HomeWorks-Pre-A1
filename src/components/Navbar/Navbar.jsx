import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import img from '../../photo/logo.jpg'

export function Navigation() {
  return (
    <div className="navbarParent">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
              <Image src={img} alt="logo" className="logo" roundedCircle />
              Flower Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>
            <Nav.Link href="#">
              <i className="bi bi-cart4"></i>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h4 className="h4">Best Quality Plants</h4>
      <h1 className="h1">Amazing Variety Of Plants Starting Just $12</h1>
      <Button variant="danger" className="shop-now-btn">SHOP NOW</Button>
    </div>
  );
}
