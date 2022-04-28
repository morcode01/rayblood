import '../index.css';
import logo from '../images/logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar className="navbar-footer" expand="lg">
      <Container>
        <Row>
          <Col className="footer-border-top" md={12}>
          </Col>
          <Col md={3}>
            <ul className="footer-navbar">
              <li className="footer-navbar-item"><a href="#">Cartão irradiação</a></li>
              <li className="footer-navbar-item"><a href="#">Web app no telemóvel</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="footer-navbar">
              <li className="footer-navbar-item"><a href="#">O que é RayBlood</a></li>
              <li className="footer-navbar-item"><a href="#">Colocar uma questão</a></li>
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
              <li className="footer-navbar-item"><a href="#">Iniciar sessão</a></li>
              <li className="footer-navbar-item"><a href="#">Registo profissionais</a></li>
            </ul>
          </Col>
          <Col md={12}>
            <div className="footer-bottom">
              <p>
                © RayBlood.com, all rights reserved! By <a href="#">Dersepa.com</a>
              </p>
              <img src={logo} className="footer-logo" alt="logo" />
            </div>
          </Col>
        </Row>
        
      </Container>
    </Navbar>
  );
}

export default Footer;
