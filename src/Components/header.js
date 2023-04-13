import React from 'react'

import { Navbar,Nav,Container,Offcanvas,Image } from 'react-bootstrap';
const header = () => {
  const themeVar="light";
  const expand="md";
  return (
    <Navbar bg='primary' variant={themeVar} expand={expand} fixed='top'>
    <Container>
    <Navbar.Brand>
      <Image src='./images/undraw_cat_epte.svg' height={48}></Image>
    محمد لطیفی
    </Navbar.Brand>
    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
    <Navbar.Offcanvas
    id={`offcanvasNavbar-expand-${expand}`}
    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
    placement="end"
    >
    <Offcanvas.Header closeButton>
    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
    Offcanvas
    </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
    <Nav className="justify-content-end flex-grow-1 pe-3">
    <Nav.Link href="#About">درباره من</Nav.Link>
    <Nav.Link href="#Contact">ارتباط</Nav.Link>
    <Nav.Link href="#Project">پروژه ها</Nav.Link>
    </Nav>
    </Offcanvas.Body>
    </Navbar.Offcanvas>
    </Container>
    </Navbar>
    )
  }
  
  export default header
