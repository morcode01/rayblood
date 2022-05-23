import React from 'react';
import '../index.css';
import '../config.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import homeCard from '../images/3d-card.png';
import bloodIcon from '../images/blood-icon.svg';
import logo from '../images/logo.svg';
import DOMPurify from 'dompurify';
import axios from "axios";

class Home extends React.Component {
  constructor(props){
    super(props);
		this.state = {
			homeTitle: '',
			homeText: '',
		}
	}
  scrollEvent = (e) => {
    e.preventDefault();
    document.getElementById("home-intro").scrollIntoView({
      behavior: 'smooth'
    });
  }
  componentDidMount(){
    // START: GET HOME PAGE TEXT
		const userData = {page_id: 4}
    axios.post(global.config.apiUrl+"getPage", userData)
    .then(res => {
      this.setState({ homeTitle: res.data.NAME });
      this.setState({ homeText: res.data.DESCRIPTION });
		})
		// END: GET HOME PAGE TEXT
  }
  render(){
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
          <button onClick={this.scrollEvent} className="btn-scroll">
            Scroll <div></div>
          </button>
        </div>
        <div id="home-intro" className="home-intro">
          <Container>
            <Row>
              <Col md={6}>
                <h3>
                  {this.state.homeTitle}
                </h3>
                <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.homeText)}}></div>
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

export default Home;
