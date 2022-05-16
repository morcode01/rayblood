import React from 'react';
import '../index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import bloodIcon from '../images/blood-icon.svg';

const utilizeFocus2 = () => {
  const ref = React.createRef()
  const setFocus = () => {ref.current &&  ref.current.focus()}

  return {setFocus, ref} 
}
const utilizeFocus3 = () => {
  const ref = React.createRef()
  const setFocus = () => {ref.current &&  ref.current.focus()}

  return {setFocus, ref} 
}
const utilizeFocus4 = () => {
  const ref = React.createRef()
  const setFocus = () => {ref.current &&  ref.current.focus()}

  return {setFocus, ref} 
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.inputFocus2 = utilizeFocus2();
    this.inputFocus3 = utilizeFocus3();
    this.inputFocus4 = utilizeFocus4();
  }
  

  render() {
    return (
      <div className="home-container">
        <div className="card-banner">
          <Container className="card-container">
            <div className="card-input-container">
              <div className="card-user-number">
                <label>Número de utente</label>
                <input type="text" placeholder="000 000 000"/>
              </div>
              <div className="card-pin-number">
                <label>Número de pin</label>
                <input id="pin-number-square-1" maxLength="1" onKeyUp={this.inputFocus2.setFocus}/>
                <input id="pin-number-square-2" maxLength="1" ref={this.inputFocus2.ref} onKeyUp={this.inputFocus3.setFocus}/>
                <input id="pin-number-square-3" maxLength="1" ref={this.inputFocus3.ref}  onKeyUp={this.inputFocus4.setFocus} />
                <input id="pin-number-square-4" maxLength="1" ref={this.inputFocus4.ref} />
              </div>
            </div>
            <div className="card-btn-container">
              <a href="#" className="link-text">Quero saber mais sobre esta doença</a>
              <Button variant="secondary">
                Obter cartão
              </Button>
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
}

export default Card;
