import React, { Component } from 'react';
import "./style.css";

// reactstrap
import {
  Card, CardBody, Alert,
  CardTitle, CardSubtitle, NavLink
} from 'reactstrap';

// redux
import { connect } from "react-redux";
import { getRessource } from "../../actions/ressource.action";

class ConnectedActuDetails extends Component {

  componentDidMount() {
    this.props.getRessource();
  }

  render() {
    const { ressources, whichCategorie, whichType } = this.props;
    const listRessources = ressources.length > 0 && ressources !== undefined && ressources !== null ?
      // eslint-disable-next-line
      ressources.filter((data) => {
        
      if ((data.categorie === whichCategorie || whichCategorie === "toute categories")  && (data.type === whichType || whichType === "tout types")) {
        return data
      }
      
      }).map(data => {
        return (
          <div key={data.id}>
            <Card>
              <CardBody>
                <CardTitle tag="h5" className="card_title_center">
                  <NavLink href={`/ressource/${data.id_ressource}`} className="ressource_link">
                    <Alert color="primary">
                      {data.titre}
                    </Alert>
                  </NavLink>
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{data.categorie}</CardSubtitle>
              </CardBody>
              <img className="actu_details_image" src={data.lien} alt="poste_image" />
              <CardBody>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Date : {data.date_envoie}</CardSubtitle>
              </CardBody>
            </Card>
          </div>
        )
      }) : null

    return (
      <div>
        {listRessources}
      </div>
    );
  }
}

const mstp = state => {
  return {
    ressources: state.ressource.ressources,
    id_user: state.userReducer.user.id
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