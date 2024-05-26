import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function OurNavBar() {
  return (
    <div>
      <Navbar expand="xl" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src="https://res.cloudinary.com/dpeqsj31d/image/upload/v1707263738/avatar_4_4.png"
              width="50"
              height="50"
              className="d-inline-block align-text-middle"
            />{" "}
            Navbar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" activeKey="/">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contacts">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default OurNavBar;
