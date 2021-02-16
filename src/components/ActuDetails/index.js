import React, { Component } from 'react';
import "./style.css";

import img from "../../assets/img/index.png";

// reactstrap
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

// redux
import { connect } from "react-redux";
import { getRessource } from "../../actions/ressource.action";

class ConnectedActuDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getRessource();
  }

  render() {
    const { ressource } = this.props;

    return (
      <>
        {
          ressource.map(ressource => (
            ressource.private === 0 ?
              <div>
                <Card>
                  <CardBody>
                    <CardTitle tag="h5" className="card_title_center">{ressource.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{ressource.theme}</CardSubtitle>
                  </CardBody>
                  <img className="actu_details_image" src={ressource.lien} alt="poste_image" />
                  <CardBody>
                    <CardText>{ressource.description}</CardText>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Date : {ressource.date_envoie}</CardSubtitle>
                  </CardBody>
                </Card>
              </div>
              :
              null
          ))
        }
      </>
    );
  }
}

const mstp = state => {
  return {
    ressource: state.ressource.ressource
  }
}

const mdtp = dispatch => ({
  getRessource: () => dispatch(getRessource())
})

const ActuDetails = connect(
  mstp,
  mdtp
)(ConnectedActuDetails)

export default ActuDetails;