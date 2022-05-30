import React from 'react';
import '../index.css';
import '../config.js';
import raybloodCard from '../images/rayblood-card.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import homeCard from '../images/3d-card.png';
import bloodIcon from '../images/blood-icon.svg';
import logo from '../images/logo.svg';
import DOMPurify from 'dompurify';
import axios from "axios";
import $ from "jquery";
import {
	Link
  } from "react-router-dom";

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

    var x;
  var $cards = $(".card");
  var $style = $(".hover");

  $cards
    .on("mousemove touchmove", function(e) { 
      // normalise touch/mouse
      var pos = [e.offsetX,e.offsetY];
      e.preventDefault();
      if ( e.type === "touchmove" ) {
        pos = [ e.touches[0].clientX, e.touches[0].clientY ];
      }
      var $card = $(this);
      // math for mouse position
      var l = pos[0];
      var t = pos[1];
      var h = $card.height();
      var w = $card.width();
      var px = Math.abs(Math.floor(100 / w * l)-100);
      var py = Math.abs(Math.floor(100 / h * t)-100);
      var pa = (50-px)+(50-py);
      // math for gradient / background positions
      var lp = (50+(px - 50)/1.5);
      var tp = (50+(py - 50)/1.5);
      var px_spark = (50+(px - 50)/7);
      var py_spark = (50+(py - 50)/7);
      var p_opc = 20+(Math.abs(pa)*1.5);
      var ty = ((tp - 50)/2) * -1;
      var tx = ((lp - 50)/1.5) * .5;
      // css to apply for active card
      var grad_pos = `background-position: ${lp}% ${tp}%;`
      var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`
      var opc = `opacity: ${p_opc/100};`
      var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`
      // need to use a <style> tag for psuedo elements
      var style = `
        .card:hover:before { ${grad_pos} }  /* gradient */
        .card:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
      `
      // set / apply css class and style
      $cards.removeClass("active");
      $card.removeClass("animated");
      $card.attr( "style", tf );
      $style.html(style);
      if ( e.type === "touchmove" ) {
        return false; 
      }
      clearTimeout(x);
    }).on("mouseout touchend touchcancel", function() {
      // remove css, apply custom animation on end
      var $card = $(this);
      $style.html("");
      $card.removeAttr("style");
      x = setTimeout(function() {
        $card.addClass("animated");
      },2500);
    });
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
                  <div className="hideMobile">
                    <Link to="/card">
                      <Button variant="secondary">
                        Obter cartão
                      </Button>
                    </Link>
                    <a href="#" className="link-text">Quero saber mais sobre esta doença</a>
                  </div>
                </div>
              </Col>
              <Col md={5}>
                <div className="demo">
                  <div className="card">
                    <div className="card-inner" style={{backgroundImage: `url(${raybloodCard})`}}></div>
                  </div>
                </div>
                <div className="showMobile">
                    <Link to="/card">
                      <Button variant="secondary">
                        Obter cartão
                      </Button>
                    </Link>
                    <a href="#" className="link-text">Quero saber mais sobre esta doença</a>
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
        </div>
      </div>
    );
  }
}

export default Home;
