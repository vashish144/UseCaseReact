import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom"
const NavBar = () => {
  return (
   <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="/">
             Covid Check
            </Nav.Link>
            <Nav.Link href="/arraytable">Table</Nav.Link>
            <Nav.Link href="/qrScannerGenerater">QrScannerOrGenerator</Nav.Link>
            <Nav.Link href="/pagination">Pagination</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar