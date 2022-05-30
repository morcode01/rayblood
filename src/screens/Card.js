import React, {useState} from 'react';
import '../index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import bloodIcon from '../images/blood-icon.svg';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import logo from '../images/logo.svg';
import arrowLeft from '../images/arrow-left.png';
import arrowRight from '../images/arrow-right.png';
import DOMPurify from 'dompurify';
import $ from "jquery";
import {
	Link
  } from "react-router-dom";

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
    this.state = {
      homeTitle: '',
      homeText: '',
      utente: '',
			pin1: '',
			pin2: '',
      pin3: '',
      pin4: '',
      showCard: 0,
      cardError: 0,
      cardID: '',
      cardName: '',
      cardEmail: '',
      cardPhone: '',
      cardUtente: '',
      cardDoctor: '',
      cardHospital: '',
      cardReason: '',
      cardBloodDate: '',
      cardIssuanceDate: '',
		}
    this.inputFocus2 = utilizeFocus2();
    this.inputFocus3 = utilizeFocus3();
    this.inputFocus4 = utilizeFocus4();
  }
  updateUtente(evt) {
    this.setState({ utente: evt.target.value });
  }
  updatePin1(evt) {
    this.setState({ pin1: evt.target.value });
  }
  updatePin2(evt) {
    this.setState({ pin2: evt.target.value });
  }
  updatePin3(evt) {
    this.setState({ pin3: evt.target.value });
  }
  updatePin4(evt) {
    this.setState({ pin4: evt.target.value });
  }
  openCard = () => {
    // START: GET HOME PAGE TEXT
    var pin = ""+this.state.pin1+this.state.pin2+this.state.pin3+this.state.pin4; 
		const userData = {utente: this.state.utente, pin: pin}
    axios.post(global.config.apiUrl+"viewCard", userData)
    .then(res => {
      if(res.data.NAME!=null){
        this.setState({cardID: res.data.CARD_ID});
        this.setState({cardName: res.data.NAME});
        this.setState({cardEmail: res.data.EMAIL});
        this.setState({cardPhone: res.data.PHONE});
        this.setState({cardUtente: res.data.UTENTE});
        this.setState({cardDoctor: res.data.DOCTOR});
        this.setState({cardHospital: res.data.HOSPITAL});
        this.setState({cardReason: res.data.REASON});
        this.setState({cardBloodDate: res.data.BLOOD_DATE});
        this.setState({cardIssuanceDate: res.data.ISSUANCE_DATE});
        this.setState({cardError: 0});
        this.setState({showCard: 1});
      }
      else{
        this.setState({cardError: 1});
      }
		})
		// END: GET HOME PAGE TEXT
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
  componentDidUpdate(){
    if($(window).width() <= 600) $('.flip-card').css('zoom',(($(window).width()-30)/535));
  }

  render() {
    return (
      <div className="home-container">
        {this.state.showCard == 0 &&
          <div className="card-banner">
            <Container className="card-container">
              {this.state.cardError == 1 &&
                <div className="card-error">
                  <p>Combinação inválida de nº de utente e pin!</p>
                </div>
              }
              <div className="card-input-container">
                <div className="card-user-number">
                  <label>Número de utente</label>
                  <input type="text" placeholder="000 000 000" onChange={evt => this.updateUtente(evt)}/>
                </div>
                <div className="card-pin-number">
                  <label>Número de pin</label>
                  <input id="pin-number-square-1" maxLength="1" onKeyUp={this.inputFocus2.setFocus} onChange={evt => this.updatePin1(evt)}/>
                  <input id="pin-number-square-2" maxLength="1" ref={this.inputFocus2.ref} onKeyUp={this.inputFocus3.setFocus} onChange={evt => this.updatePin2(evt)}/>
                  <input id="pin-number-square-3" maxLength="1" ref={this.inputFocus3.ref}  onKeyUp={this.inputFocus4.setFocus} onChange={evt => this.updatePin3(evt)}/>
                  <input id="pin-number-square-4" maxLength="1" ref={this.inputFocus4.ref} onChange={evt => this.updatePin4(evt)}/>
                </div>
              </div>
              <div className="card-btn-container">
                <Button variant="secondary" className="showMobile" onClick={() => this.openCard()}>
                    Obter cartão
                </Button>
                <div>
                  <InfoModal/>
                </div>
                <Button variant="secondary" className="hideMobile" onClick={() => this.openCard()}>
                    Obter cartão
                </Button>
              </div>
            </Container>
          </div>
        }
        <div className="home-intro">
          {this.state.showCard == 0 &&
            <Container>
              <Row>
                <Col md={6} className="showMobile">
                  <div className="blood-icon-container">
                    <div className="blood-icon-inner-container">
                      <div className="red-circle"></div>
                      <img src={bloodIcon} className="blood-icon"/>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <h3>
                    {this.state.homeTitle}
                  </h3>
                  <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.homeText)}}></div>
                  <Button variant="primary">
                    Obter cartão Individual de irradiação
                  </Button>
                </Col>
                <Col md={6} className="hideMobile">
                  <div className="blood-icon-container">
                    <div className="blood-icon-inner-container">
                      <div className="red-circle"></div>
                      <img src={bloodIcon} className="blood-icon"/>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          }
          {this.state.showCard == 1 &&
            <Container>
              <Row>
                <Col md={3}>
                  <h3>Cartão criado com sucesso!</h3>
                  <div className="spacer20"></div>
                  <p>Reveja o cartão, para se certificar que os dados estão todos correcto. Se precisar de editar as informações do cartão criado, clique em “Editar cartão” por baixo do cartão do lado direito, para editar as informadores pretendidas.</p>
                </Col>
                <Col md={9}>
                  <div style={{width:535}} className="card-right-container">
                      <div className="flip-card">
                          <div className="flip-card-inner">
                              <div className="flip-card-front">
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
                              </div>
                              <div className="flip-card-back">
                                  <div id="created-card-back">
                                      <div className="row">
                                          <div className="col-12">
                                              <div className="card-info-container" style={{paddingTop:0}}>
                                                  <label>Nome:</label>
                                                  <span>{this.state.cardName}</span>
                                              </div>
                                          </div>
                                          <div className="col-6">
                                              <div className="card-info-container">
                                                  <label>Nº Utente:</label>
                                                  <span>{this.state.utente}</span>
                                              </div>
                                          </div>
                                          <div className="col-6">
                                              <div className="card-info-container">
                                                  <label>Data emissão:</label>
                                                  <span>{this.state.cardIssuanceDate}</span>
                                              </div>
                                          </div>
                                          <div className="col-6">
                                              <div className="card-info-container">
                                                  <label>Médico:</label>
                                                  <span>{this.state.cardDoctor}</span>
                                              </div>
                                          </div>
                                          <div className="col-6">
                                              <div className="card-info-container">
                                                  <label>Hospital:</label>
                                                  <span>{this.state.cardHospital}</span>
                                              </div>
                                          </div>
                                          <div className="col-12">
                                              <div className="card-info-container-reason">
                                                  <label>Razão sangue irradiado:</label>
                                                  <span>{this.state.cardReason}</span>
                                              </div>
                                          </div>
                                          <div className="col-6">
                                              <label className="label-red" style={{marginTop: 5}}>Sangue irradiado indefinidamente!</label>
                                              <div className="card-info-container">
                                                  <label className="label-red">Ou até:</label>
                                                  <span>{this.state.cardBloodDate}</span>
                                              </div>
                                              <label className="label-gray">Mais informações em <a href="#">www.rayblood.pt</a></label>
                                          </div>
                                          <div className="col-6 card-info-logo">
                                              <img src={logo} className="footer-logo" alt="logo"/>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div style={{display:'flex',alignItems:'center',marginTop:20,position:'relative'}}>
                          <a href="#" className="card-arrow-left"><img src={arrowLeft}/></a>
                          <a href="#" className="card-arrow-right"><img src={arrowRight}/></a>
                          <div style={{width:150,marginLeft: 40}}><span style={{color:'#939090',fontWeight:100}}>Clique nas setas para ver ambos os lados</span></div>
                      </div>
                      <div style={{display:'flex',alignItems:'center',marginTop:40}}>
                          <a href={global.config.adminUrl+'printCard/'+this.state.cardID} target='_blank' className="btn-primary">Imprimir cartão</a>
                          <a href="#" className="btn-secondary">Descarregar cartão em PDF</a>
                      </div>
                  </div>
                </Col>
              </Row>
            </Container>
          }
        </div>
      </div>
    );
  }
}

function InfoModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="link-text-open-modal" onClick={handleShow}>
        Recuperar pin
      </Button>

      <Modal show={show} onHide={handleClose} backdrop='static' id="recover-pin-modal" centered keyboard="False">
        <Modal.Header closeButton>
          <Modal.Title>Recuperar pin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-user-number">
            <label>Número de utente</label>
            <input type="text" placeholder="000 000 000"/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Card;
