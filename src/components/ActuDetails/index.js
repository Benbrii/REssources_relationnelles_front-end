import React, { Component } from 'react';
import "./style.css";

import img from "../../assets/img/index.png";

// reactstrap
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

// redux
import { connect } from "react-redux";
import { getTest } from "../../actions/test.action";

class ConnectedActuDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getTest();
  }

  render() {
    const { test } = this.props;
    console.log(test);

    return (
      <>
        {
          test.map(test => (
            <div>
              <Card>
                <CardBody>
                  <CardTitle tag="h5" className="card_title_center">{test.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">{test.theme}</CardSubtitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Date : {test.date_envoie}</CardSubtitle>
                </CardBody>
                <img className="actu_details_image" src={img} alt="poste_image" />
                <CardBody>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <CardLink href="#">Card Link</CardLink>
                  <CardLink href="#">Another Link</CardLink>
                </CardBody>
              </Card>
            </div>
          ))
        }
      </>
    );
  }
}

const mstp = state => {
  return {
    test: state.test.test
  }
}

const mdtp = dispatch => ({
  getTest: () => dispatch(getTest())
})

const ActuDetails = connect(
  mstp,
  mdtp
)(ConnectedActuDetails)

export default ActuDetails;