import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.png';
import ModalContact from './ModalContact';
import './NavBar.scss'

export default function NavBar() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Navbar bg="dark" variant="dark" id='nav'>
        <Container>
          <Navbar.Brand><img src={logo} alt="not found" className='img-nav'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='#nav'>Inicio</Nav.Link>
            <Nav.Link onClick={() => setModalShow(true)}>Contacto</Nav.Link>
            <Nav.Link href="https://www.instagram.com/propiedadesquilmore/">Instagram</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <ModalContact
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}