import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'

const NavbarComponent = () => {
   return (
      <>
         <Navbar className="shadow" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
               <Navbar.Brand href="/"><img width="150px" src={logo} alt="" /></Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link><Link to='/'>Productos</Link></Nav.Link>
                     <Nav.Link><Link to='/registro'>Registrar</Link></Nav.Link>

                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   )
}

export default NavbarComponent