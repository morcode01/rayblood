import React from 'react';
import '../index.css';
import '../config.js';
import logo from '../images/logo.svg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {
	Link
  } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <Navbar className="navbar-header" expand="lg">
        <Container>
          <div><Link to="/"><img src={logo} className="header-logo" alt="logo" /></Link></div>
          <ul className="header-navbar">
            <li className={'header-navbar-item ' + (window.location.pathname == '/card' ? "active" : "")}><Link to="/card">Cartão irradiação</Link></li>
            <li className={'header-navbar-item ' + (window.location.pathname == '/' || window.location.pathname == '/rayblood' ? "active" : "")}><Link to="/">O que é RayBlood</Link></li>
            <li className={'header-navbar-item ' + (window.location.pathname == '/webapp' ? "active" : "")}><a href="#">Web app no telemóvel</a></li>
            <li className={'header-navbar-item ' + (window.location.pathname == '/question' ? "active" : "")}><Link to="/question">Colocar uma questão</Link></li>
            <li className={'header-navbar-item ' + (window.location.pathname == '/login' ? "active" : "")}><a href={global.config.adminUrl+'login'}>Iniciar Sessão</a></li>
          </ul>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
