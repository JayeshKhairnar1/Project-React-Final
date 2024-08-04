import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

// Navbar component
const CustomNavbar = () => {
  const location = useLocation(); // Hook to get the current route

  const itemList = [
    { text: 'Home', to: '/' },
    { text: 'About', to: '/about' },
    { text: 'Contact', to: '/contact' },
    { text: 'Login', to: '/login' },
    { text: 'Register', to: '/register' }
  ];

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          V-Config
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {itemList.map((item) => {
              const { text, to } = item;
              const isActive = location.pathname === to; // Check if the current route is active

              return (
                <Nav.Link
                  key={text}
                  as={Link}
                  to={to}
                  style={{
                    color: isActive ? '#fff' : '#ccc',
                    borderBottom: isActive ? '2px solid #fff' : 'none',
                    textDecoration: 'none',
                    margin: '0 1rem', // Add margin to space out links
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseOut={(e) => e.currentTarget.style.color = isActive ? '#fff' : '#ccc'}
                >
                  {text}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
