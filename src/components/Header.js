import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import logo from "../images/logo.png";
import { useState } from "react";
function Header() {
  const [showDropdown, setShowDropdown] = useState(null);

  const handleMouseEnter = (id) => {
    setShowDropdown(id); // Show dropdown on hover
  };

  const handleMouseLeave = () => {
    setShowDropdown(null); // Hide dropdown when mouse leaves
  };
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand className="logo logo_image" as={NavLink} to="/">
          <h1>
            beauty
            <span className="muellerhoff">Agency</span>
          </h1>
          <Image src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto    ">
            <NavDropdown
              title={
                <NavLink to="home" className="nav-link text-secondary">
                  Home
                </NavLink>
              }
              id="home"
              className="nav-link "
              show={showDropdown === "home"}
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => e.preventDefault()} // Prevent click event
            >
              <NavDropdown.Item as={NavLink} to="/beauty">
                Beauty
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="models">
                Models
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <NavLink to="pages" className="nav-link text-secondary">
                  Pages
                </NavLink>
              }
              id="page"
              className="nav-link "
              show={showDropdown === "page"}
              onMouseEnter={() => handleMouseEnter("page")}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => e.preventDefault()} // Prevent click event
            >
              <NavDropdown.Item as={NavLink} to="/beauty">
                SHORTCODE$WIDGETS
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="models">
                BLOG
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="models">
                Gallery
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="models">
                HEADERS
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="models">
                BREADCRUMBS
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="models">
                FOOTER
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="models">
                COPYRIGHT
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="models">
                EVENTS
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="models">
                ABOUT
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="models">
                OUR FEATURES
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="models">
                OUR SERVICES
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="models">
                COMING SOON
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink to="models" className="nav-link text-secondary">
              Models
            </NavLink>
            <NavLink href="appointment" className="nav-link text-secondary">
              Appointment
            </NavLink>
            <NavLink href="faq" className="nav-link text-secondary">
              Faq
            </NavLink>
            <NavLink href="contact" className="nav-link text-secondary">
              Contact
            </NavLink>

            <NavDropdown
              title="Home"
              id="basic-nav-dropdown"
              className="nav-link text-white"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="col-md-3 col-sm-6 header-contacts text-center hidden-xs">
            <div className="text-warning opacity-75 highlight d-inline-block fs-3 fw-light">
              (800) 543 4625
            </div>
            <div className="fontsize_20 text-secondary opacity-75 topmargin_-5">
              24/7 free calls
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
