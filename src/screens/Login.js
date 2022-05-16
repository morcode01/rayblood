import React, { useState } from 'react';
import '../index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextInput from '../components/TextInput';


class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <div className="home-container">
        <div className="home-banner">
          <Container>
            <Row>
              <Col md={6}>
                <p className='login-text'>
                  Se pretende o seu <a href="#">Cartão de Irradiação, carregue neste link</a>. Esta área é reservada para os colaboradores do RayBlood. Se tiver alguma dúvida, por falar <a href="#">envie-nos uma mensagem, aqui</a>.
                </p>
              </Col>
              <Col md={6}>
                <div className="login-form-container">
                  <form id="login-form">
                    <TextInput label="Username" name="username"/>
                    <TextInput label="Password" name="password"/>
                    <button type="submit" className="btn-secondary">Iniciar Sessão</button>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Login;
