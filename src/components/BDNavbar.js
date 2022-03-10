// import { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg';
import BDButton from './BDButton';

export default function BDNavbar () {
  // const [isLogin, setIsLogin] = useState(false);
  return (
    <Navbar className='py-3 py-lg-4' fixed='top' collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand className='d-flex align-items-center' href="#home">
          <img src={logo} height={33} alt="" />
          <h1 className='d-none d-md-block fs-5 fw-bolder text-dark m-0 ms-4'>Black Dragon Coffee</h1>
        </Navbar.Brand>
        <Navbar.Toggle className='border-0 box-focus-shadow-none' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-lg-5">
            <Nav.Link className='active text-secondary fw-bold me-lg-2' href="#features">Home</Nav.Link>
            <Nav.Link className='mx-lg-2' href="#pricing">Product</Nav.Link>
            <Nav.Link className='mx-lg-2' href="#cart">Your Cart</Nav.Link>
            <Nav.Link className='ms-lg-2' href="#history">History</Nav.Link>
          </Nav>
          <Nav className=''>
            <BDButton className='rounded-pill btn-secondary text-cream my-3 ms-lg-5 me-lg-3 my-lg-0 px-lg-5 py-2'>Login</BDButton>
            <BDButton className='rounded-pill text-cream px-lg-5 py-2'>Sign Up</BDButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
