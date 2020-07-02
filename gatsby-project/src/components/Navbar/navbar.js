import React from 'react';

import './navbar.css'
import mainLogo from '../../images/gatsby-icon.png'

import { Navbar, Nav, Button } from 'react-bootstrap';

const Example = () => {
  return (
    <div >
        <Navbar className='main-nav' collapseOnSelect expand="md" variant="dark">
            <Navbar.Brand href="#home">
            <img
            alt=""
            src={mainLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '} 
            Indústria de Vendas
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="/component/">E-book</Nav.Link>
                    <Nav.Link href="/component/">Depoimentos</Nav.Link>
                    <Nav.Link href="/component/">Metodoliga</Nav.Link>
                    <Button className='primary-button' variant="success">Sim, eu quero!</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Navbar className='line-nav'>
        </Navbar>
    </div>
  );
}

export default Example;