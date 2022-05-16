import React, { useState } from 'react';
import '../index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextInput from '../components/TextInput';


class Question extends React.Component {
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
                <p className='question-text'>
                Entre em contacto com um dos colaboradores RayBlood, caso tenha alguma dúvida ou questão relativa à Doença do Enxerto Contra o Hospedeiro Associada à Transfusão. O colaborador responderá com a maior brevidade possível. Obrigado.
                </p>
              </Col>
              <Col md={6}>
                <div className="question-form-container">
                  <form id="question-form">
                    <TextInput label="Nome" name="name"/>
                    <TextInput label="E-mail" name="email"/>
                    <TextInput label="Mensagem" name="message"/>
                    <button type="submit" className="btn-secondary">Enviar Mensagem</button>
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

export default Question;
