import React from 'react';

import './navbar.css'
import mainLogo from '../../images/navBarLogo.png'

import { Navbar, Nav, Button } from 'react-bootstrap';

const Example = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" className="main-nav navbar-expand-md navbar-dark">
        <div className="container">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={mainLogo}
              width="219"
              height="60"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <ul className="navbar-nav mb-auto mt-0 ml-auto">
              <li className="nav-item active">
                <Nav.Link href="/component/">E-book</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="/component/">Depoimentos</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="/component/">Metodoliga</Nav.Link>
              </li>
              <li className="nav-item">
                <Button className="primary-button" variant="success">
                  Sim, eu quero!
                </Button>
              </li>
            </ul>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Navbar className="line-nav"></Navbar>
    </div>
  );
}

export default Example;