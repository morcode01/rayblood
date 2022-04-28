import '../index.css';
import logo from '../images/logo.svg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className="navbar-header" expand="lg">
      <Container>
        <Navbar.Brand href="#"><img src={logo} className="header-logo" alt="logo" /></Navbar.Brand>
        <ul className="header-navbar">
          <li className="header-navbar-item"><a href="#">Cartão irradiação</a></li>
          <li className="header-navbar-item"><a href="#">O que é RayBlood</a></li>
          <li className="header-navbar-item"><a href="#">Web app no telemóvel</a></li>
          <li className="header-navbar-item"><a href="#">Colocar uma questão</a></li>
          <li className="header-navbar-item"><a href="#">Iniciar sessão</a></li>
        </ul>
      </Container>
    </Navbar>
  );
}

export default Header;
