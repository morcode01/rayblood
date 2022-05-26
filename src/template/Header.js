import React from 'react';
import '../index.css';
import '../config.js';
import logo from '../images/logo.svg';
import menuIcon from '../images/menu-icon.svg';
import closeIcon from '../images/close-icon.svg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import $ from "jquery";
import {
	Link
  } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  openMenuMobile = () => {
    $('.menu-mobile').css('left','20%');
  }
  closeMenuMobile = () => {
    $('.menu-mobile').css('left','100%');
  }
  componentDidMount = () =>{
    $('.menu-mobile .header-navbar-item').click(function() {
      $('.menu-mobile').css('left','100%');
    });
  }

  render() {
    return (
      <Navbar className="navbar-header" expand="lg">
        <Container>
          <div><Link to="/"><img src={logo} className="header-logo" alt="logo" /></Link></div>
          <ul className="header-navbar hideMobile">
            <li className={'header-navbar-item ' + (window.location.pathname == '/card' ? "active" : "")}><Link to="/card">Cartão irradiação</Link></li>
            <li className={'header-navbar-item ' + (window.location.pathname == '/' || window.location.pathname == '/rayblood' ? "active" : "")}><Link to="/">O que é RayBlood</Link></li>
            <li className={'header-navbar-item ' + (window.location.pathname == '/webapp' ? "active" : "")}><a href="#">Web app no telemóvel</a></li>
            <li className={'header-navbar-item ' + (window.location.pathname == '/question' ? "active" : "")}><Link to="/question">Colocar uma questão</Link></li>
            <li className={'header-navbar-item ' + (window.location.pathname == '/login' ? "active" : "")}><a href={global.config.adminUrl+'login'}>Iniciar Sessão</a></li>
          </ul>
          <button className="open-menu-mobile" onClick={this.openMenuMobile}>
            <img src={menuIcon} className="menu-icon"/>
            <span>Menu</span>
          </button>
          <div className="menu-mobile showMobile">
          <button className="close-menu-mobile" onClick={this.closeMenuMobile}>
            <img src={closeIcon} className="menu-icon"/>
            <span>Fechar</span>
          </button>
            <ul>
              <li className={'header-navbar-item ' + (window.location.pathname == '/card' ? "active" : "")}><Link to="/card">Cartão irradiação</Link></li>
              <li className={'header-navbar-item ' + (window.location.pathname == '/' || window.location.pathname == '/rayblood' ? "active" : "")}><Link to="/">O que é RayBlood</Link></li>
              <li className={'header-navbar-item ' + (window.location.pathname == '/webapp' ? "active" : "")}><a href="#">Web app no telemóvel</a></li>
              <li className={'header-navbar-item ' + (window.location.pathname == '/question' ? "active" : "")}><Link to="/question">Colocar uma questão</Link></li>
              <li className={'header-navbar-item ' + (window.location.pathname == '/login' ? "active" : "")}><a href={global.config.adminUrl+'login'}>Iniciar Sessão</a></li>
            </ul>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
