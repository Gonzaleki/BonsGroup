import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function NucleoIcons({quienes}) {
  return (
    <>
      <div className="section section-nucleo-icons" ref={quienes}>
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Quienes Somos</h2>
              <h5 className="description">
              No solo somos una productora audiovisual; somos tus aliados estratégicos
              en la industria del entretenimiento televisivo. Con un nombre que resuena
              en los corazones de las principales cadenas de televisión, somos la opción
              de confianza para la producción de contenidos innovadores y emocionantes.
              Nuestra pasión por la narración visual y nuestra dedicación a la excelencia
              nos distinguen. 
              Conócenos más a fondo y descubre cómo nuestro equipo de profesionales 
              apasionados puede hacer que tu visión cobre vida

              </h5>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="now-ui-icons ui-1_send"></i>
                <i className="now-ui-icons ui-2_like"></i>
                <i className="now-ui-icons transportation_air-baloon"></i>
                <i className="now-ui-icons text_bold"></i>
                <i className="now-ui-icons tech_headphones"></i>
                <i className="now-ui-icons emoticons_satisfied"></i>
                <i className="now-ui-icons shopping_cart-simple"></i>
                <i className="now-ui-icons objects_spaceship"></i>
                <i className="now-ui-icons media-2_note-03"></i>
                <i className="now-ui-icons ui-2_favourite-28"></i>
                <i className="now-ui-icons design_palette"></i>
                <i className="now-ui-icons clothes_tie-bow"></i>
                <i className="now-ui-icons location_pin"></i>
                <i className="now-ui-icons objects_key-25"></i>
                <i className="now-ui-icons travel_istanbul"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
