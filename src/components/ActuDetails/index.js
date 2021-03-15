import React, { Component } from 'react';
import "./style.css";

// reactstrap
import {
  Card, CardBody, Alert,
  CardTitle, CardSubtitle, NavLink,Button
} from 'reactstrap';

// redux
import { connect } from "react-redux";
import { getRessource,deleteRessourceById } from "../../actions/ressource.action";

class ConnectedActuDetails extends Component {

  componentDidMount() {
    this.props.getRessource();
  }

  delRess(id_ress) {
    console.log("id_ress",id_ress)
    //this.props.deleteRessourceById(ressource).then(() => {window.location.reload(true)});
  }

  render() {
    const { ressources, whichCategorie, whichType } = this.props;
    const listRessources = ressources.length > 0 && ressources !== undefined && ressources !== null ?
      // eslint-disable-next-line
      ressources.filter((data) => {
        
      if ((data.categorie === whichCategorie || whichCategorie === "Toutes categories")  && (data.type === whichType || whichType === "tout types")) {
        return data
      }
      
      }).map(data => {
        return (
          <div key={data.id_ressource}>
            <Card>
              <NavLink href={`/ressource/${data.id_ressource}`} className="ressource_link">
                <CardBody>
                  <CardTitle tag="h5" className="card_title_center">
                    
                      <Alert color="primary">
                        {data.titre}
                      </Alert>
                    
                  </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">{data.categorie}</CardSubtitle>
                </CardBody>
                <img className="actu_details_image" src={data.lien} alt="poste_image" />
                <CardBody>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Date : {data.date_envoie}</CardSubtitle>
                  <Button  onClick={this.delRess(data.id_ressource)}> Supprimer </Button>
                </CardBody>
              </NavLink>
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
  getRessource: () => dispatch(getRessource()),
  deleteRessourceById: id =>dispatch(deleteRessourceById(id)) 
})

const ActuDetails = connect(
  mstp,
  mdtp
)(ConnectedActuDetails)

export default ActuDetails;