import '../index.css';
import logo from '../images/logo.svg';
import logoFooter from '../images/logo-footer.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import {
	Link
  } from "react-router-dom";

function Footer() {
  return (
    <Navbar className="navbar-footer" expand="lg">
      <Container className="hideMobile">
        <Row>
          <Col className="footer-border-top" md={12}>
          </Col>
          <Col md={3}>
            <ul className="footer-navbar">
              <li className="footer-navbar-item"><Link to="/card">Cartão irradiação</Link></li>
              <li className="footer-navbar-item"><a href="#">Web app no telemóvel</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="footer-navbar">
              <li className="footer-navbar-item"><Link to="/">O que é RayBlood</Link></li>
              <li className="footer-navbar-item"><Link to="/question">Colocar uma questão</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="footer-navbar">
              <li className="footer-navbar-item"><a href="#">Política de privacidade</a></li>
              <li className="footer-navbar-item"><a href="#">Termos e condições</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="footer-navbar">
              <li className="footer-navbar-item"><Link to="/login">Iniciar Sessão</Link></li>
              <li className="footer-navbar-item"><a href="#">Registo profissionais</a></li>
            </ul>
          </Col>
          <Col md={12}>
            <div className="footer-bottom">
              <p>
                © RayBlood.com, all rights reserved! By <a href="#">Dersepa.com</a>
              </p>
              <img src={logoFooter} className="footer-logo" alt="logo" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="showMobile">
        <Row>
          <div className="footer-border-top col-12">
            <div></div>
          </div>
          <div className="col-6 footer-menu-item">
            <Link to="/card">Cartão irradiação</Link>
          </div>
          <div className="col-6 footer-menu-item">
            <Link to="/login">Iniciar Sessão</Link>
          </div>
          <div className="col-6 footer-menu-item">
            <a href="#">Web app no telemóvel</a>
          </div>
          <div className="col-6 footer-menu-item">
            <a href="#">Registo profissionais</a>
          </div>
          <div className="col-6 footer-menu-item">
            <Link to="/">O que é RayBlood</Link>
          </div>
          <div className="col-6 footer-menu-item">
            <a href="#">Política de privacidade</a>
          </div>
          <div className="col-6 footer-menu-item">
            <Link to="/question">Colocar uma questão</Link>
          </div>
          <div className="col-6 footer-menu-item">
            <a href="#">Termos e condições</a>
          </div>
          <div>
            <div className="footer-bottom">
              <img src={logoFooter} className="footer-logo" alt="logo" />
              <p>
                © RayBlood.com, all rights reserved! By <a href="#">Dersepa.com</a>
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Footer;
