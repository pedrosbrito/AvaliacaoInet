// src/components/Navbar.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Loja de Bolos</Navbar.Brand>
        <Nav className="ml-auto">
          <Link to="/products" className="nav-link">Produtos</Link>
          <Link to="/product-add" className="nav-link">Cadastrar Produto</Link>
          <Link to="/user-register" className="nav-link">Cadastrar Funcionário</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;



