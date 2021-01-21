import React, { Component } from 'react';
import "./style.css";

// components
import Navigation from "../../components/Navigation";
import Evenement from "../../components/Evénements";
import NavBar from '../../components/NavBar'

// reactstrap
import { Row, Col } from 'reactstrap';

class Profil extends Component {

  render() {
    return (
      <>
        <NavBar />
        <Row className="row_quentin">
          <Col xs="3">
            <Navigation />
          </Col>
          <Col xs="9">
            <Evenement />
          </Col>
        </Row>
      </>
    );
  }
}

export default Profil;