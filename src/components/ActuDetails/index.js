import React, { Component } from 'react';
import "./style.css";

import img from "../../assets/img/index.png";

// reactstrap
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

class ActuDetails extends Component {

  render() {
    return (
      <>
        <Card>
          <CardBody>
            <CardTitle tag="h5" className="card_title_center">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          </CardBody>
          <img className="actu_details_image" src={img} alt="poste_image" />
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </>
    );
  }²
}

export default ActuDetails;