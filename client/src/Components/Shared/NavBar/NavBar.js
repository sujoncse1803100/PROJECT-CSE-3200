import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../Home/Header/Header.css';
import '../../../App.css';

export const NavBar = () => {
  return (
    <Navbar variant="dark" className=" mb-5" style={{opacity:'0.75'}} expand="md">
      <Navbar.Brand style={{color:'white'}}>POWER <span style={{color:'yellow'}}>X</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav navToggler"></Navbar.Toggle>
      <Navbar.Collapse>
        <Nav className="ms-auto navColor">
          <Link to="/" style={{textDecoration:'none'}} className="text-white me-4 navLink">Home </Link>
          <Link to="/" style={{textDecoration:'none'}} className="text-white me-4 navLink">Services </Link>
          <Link to="/classes" style={{textDecoration:'none'}} className="text-white me-4 navLink">Classes </Link>
          <Link to="/" style={{textDecoration:'none'}} className="text-white me-4 navLink">About Us </Link>
          <Link to="/" style={{textDecoration:'none'}} className="text-white me-4 navLink">Blog </Link>
          <Link to="/pricing" style={{textDecoration:'none'}} className="text-white me-4 navLink">Pricing </Link>
          <Link to="/" style={{textDecoration:'none'}} className="text-white me-4 navLink">Contuct Us </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
