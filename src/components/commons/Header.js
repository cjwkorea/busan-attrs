import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
       
        부산 명소
      </Navbar.Brand>
    </Container>
  </Navbar>
  
  )
};

export default Header;
