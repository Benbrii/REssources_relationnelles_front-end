import React, { Component } from 'react';
import "./style.css";

// components
import ActuDetails from '../ActuDetails';

// reactstrap
import { Container, Button } from 'reactstrap';


class ActuPage extends Component {
  render() {
   

    return (
      <>
        <Container className="actu_page_container">
          <div className="actu_page_add_button_container">
            <Button color="info" className="actu_page_add_button">Ajouter un poste</Button>{' '}
          </div>
          <div className="actu_details_container">
            <ActuDetails />
          </div>
        </Container>
      </>
    );
  }
}


export default  ActuPage;

