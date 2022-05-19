import '../index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import homeCard from '../images/3d-card.png';
import bloodIcon from '../images/blood-icon.svg';
import logo from '../images/logo.svg';

function Home() {
  function scrollEvent(e) {
    e.preventDefault();
    document.getElementById("home-intro").scrollIntoView({
      behavior: 'smooth'
    });
  }
  return (
    <div className="home-container">
      <div className="home-banner">
        <Container>
          <Row>
            <Col md={7}>
              <div>
                <h2>
                  Encontre aqui o seu cartão de irradiação da Doença do Enxerto Contra o Hospedeiro Associada à Transfusão
                </h2>
                <Button variant="secondary">
                  Obter cartão
                </Button>
                <a href="#" className="link-text">Quero saber mais sobre esta doença</a>
              </div>
            </Col>
            <Col md={5}>
              <div id="created-card">
                  <div className="card-top">
                      <img src={logo} className="card-logo" alt="RayBlood"/>
                      <p>Risco de desenvolver</p>
                      <h2>Doença do Enxerto Contra o Hospedeiro Associado à Transfusão</h2>
                  </div>
                  <div className="card-bottom">
                      <p>Se necessitar de uma transfusão de componentes sanguíneos (eritrócitos, plaquetas e granulócitos) eles <b>devem ser IRRADIADOS. Por favor informe o Serviço de Medicina Transfusional.</b></p>
                  </div>
              </div>
            </Col>
          </Row>
        </Container>
        <button onClick={scrollEvent} className="btn-scroll">
          Scroll <div></div>
        </button>
      </div>
      <div id="home-intro" className="home-intro">
        <Container>
          <Row>
            <Col md={6}>
              <h3>
                O que é a Doença do Enxerto Contra o Hospedeiro Associada à Transfusão
              </h3>
              <p>
                A Doença do Enxerto Contra o Hospedeiro Associada à Transfusão é uma rara complicação da transfusão de componentes sanguíneos, mas que pode ser fatal. Pelas características da sua situação clínica está em risco de desenvolver esta doença. A irradiação de componentes sanguíneos consegue prevenir a Doença do Enxerto Contra o Hospedeiro Associada à Transfusão. No entanto, não se realiza a irradiação universal dos componentes sanguíneos. Por isso, se precisar de receber uma transfusão de componentes sanguíneos, estes devem ser irradiados. Assim, deve fazer-se acompanhar sempre do seu Cartão Individual de Irradiação para avisar a equipa médica que o está observar ou a acompanhar, que caso necessite de uma transfusão, ela sempre que possível deve ser previamente irradiada.
              </p>
              <Button variant="primary">
                Obter cartão Individual de irradiação
              </Button>
            </Col>
            <Col md={6}>
              <div className="blood-icon-container">
                <div className="blood-icon-inner-container">
                  <div className="red-circle"></div>
                  <img src={bloodIcon} className="blood-icon"/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
