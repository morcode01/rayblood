import '../index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Card() {
  return (
    <div className="home-container">
      <div className="home-banner">
        <Container className="card-container">
          <div className="card-user-number">
            <label>Número de utente</label>
            <input type="text" placeholder="000 000 000"/>
          </div>
          <div className="card-pin-number">
            <label>Número de pin</label>
            <input type="tel" maxlength="4"/>
            <div className="pin-number-square-1"></div>
            <div className="pin-number-square-2"></div>
            <div className="pin-number-square-3"></div>
            <div className="pin-number-square-4"></div>
          </div>
        </Container>
      </div>
      <div className="home-intro">
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
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Card;
