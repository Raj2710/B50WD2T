import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
function Header() {
    let navigate = useNavigate()
    let logout = useLogout()
  return <>
  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/dashboard')}>Dashboard</Nav.Link>
            <Nav.Link href='/'>Create User</Nav.Link>
            <Nav.Item><Button onClick={()=>logout()}>Logout</Button></Nav.Item>
          </Nav>
        </Container>
      </Navbar>
  </>
}

export default Header