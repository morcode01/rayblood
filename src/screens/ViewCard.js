import '../index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import homeCard from '../images/3d-card.png';
import bloodIcon from '../images/blood-icon.svg';
import logo from '../images/logo.svg';

function ViewCard() {
  function scrollEvent(e) {
    e.preventDefault();
    document.getElementById("home-intro").scrollIntoView({
      behavior: 'smooth'
    });
  }
  return (
    <div className="home-container">
      <div id="home-intro" className="home-intro">
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
                                      <div className="col-md-12">
                                          <div className="card-info-container" style={{paddingTop:0}}>
                                              <label>Nome:</label>
                                              <span></span>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="card-info-container">
                                              <label>Nº Utente:</label>
                                              <span></span>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="card-info-container">
                                              <label>Data emissão:</label>
                                              <span></span>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="card-info-container">
                                              <label>Médico:</label>
                                              <span></span>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="card-info-container">
                                              <label>Hospital:</label>
                                              <span></span>
                                          </div>
                                      </div>
                                      <div className="col-md-12">
                                          <div className="card-info-container-reason">
                                              <label>Razão sangue irradiado:</label>
                                              <span></span>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <label className="label-red" style={{marginTop: 5}}>Sangue irradiado indefinidamente!</label>
                                          <div className="card-info-container">
                                              <label className="label-red">Ou até:</label>
                                              <span></span>
                                          </div>
                                          <label className="label-gray">Mais informações em <a href="#">www.rayblood.pt</a></label>
                                      </div>
                                      <div className="col-md-6 card-info-logo">
                                          <img src={logo} className="footer-logo" alt="logo"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div style={{display:'flex',alignItems:'center',marginTop:20,position:'relative'}}>
                      <a href="#" className="card-arrow-left"><img src=""/></a>
                      <a href="#" className="card-arrow-right"><img src=""/></a>
                      <div style={{width:150,marginLeft: 40}}><span style={{color:'#939090',fontWeight:100}}>Clique nas setas para ver ambos os lados</span></div>
                      <a href="#" className="btn-edit-card">Editar cartão</a>
                  </div>
                  <div style={{display:'flex',alignItems:'center',marginTop:40}}>
                      <a href="#" className="btn-primary">Imprimir cartão</a>
                      <a href="#" className="btn-secondary">Descarregar cartão em PDF</a>
                  </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ViewCard;
