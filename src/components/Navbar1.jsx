import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';

const Navbar1 = () => {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="nav mb-3">
          <Container fluid>
            <Navbar.Brand href="#" className='contenedor-logo'>
              <img className='logo-nav' src={logo} alt="" />
              <p>Tækni</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`navbar-expand-${expand}`} />
            <Navbar.Collapse id={`navbar-expand-${expand}`}>
              <Nav className="justify-content-center flex-grow-1 pe-5">
                <Nav.Link href="#inicio">
                  Inicio
                </Nav.Link>
                <Nav.Link href="#servicios">
                  Servicios
                </Nav.Link>
                <Nav.Link href="#nosotros">
                  Nosotros
                </Nav.Link>
                <Nav.Link href="#desarrollo">
                  Desarrollo
                </Nav.Link>
                <Nav.Link href="#contacto">
                  Contacto
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navbar1;
