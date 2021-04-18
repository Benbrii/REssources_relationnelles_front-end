import React, { Component } from 'react';
import "./style.css";

// reactstrap
import {
  Card, CardBody, Alert,
  CardTitle, CardSubtitle, NavLink
} from 'reactstrap';

// redux
import { connect } from "react-redux";
import { getRessource, deleteRessourceById } from "../../actions/ressource.action";

class ConnectedActuDetails extends Component {

  componentDidMount() {
    this.props.getRessource();
  }

  delRess(id_ress) {
    console.log("id_ress", id_ress)
    //this.props.deleteRessourceById(ressource).then(() => {window.location.reload(true)});
  }

  render() {
    const { ressources, whichCategorie, whichType } = this.props;
    let listRessources = ""
    if (ressources.length > 0) {
      listRessources = ressources[0].length > 0 && ressources[0] !== undefined && ressources[0] !== null ?

        ressources.filter((data) => {

          let filterCat = false

          for (let i = 0; i < data[1].length; i++) {

            if (data[1][i].labelle === whichCategorie) {
              filterCat = true
            }
          }

          if ((filterCat === true || whichCategorie === "Toutes categories") && (data[0].type === whichType || whichType === "tout types")) {
            return data
          } else {
            return null
          }

        }).map(data => {
          if (data[0]) {
            return (
              <div key={data[0].id}>
                <Card>
                  <NavLink href={`/ressource/${data[0].id}`} className="ressource_link">
                    <CardBody>
                      <CardTitle tag="h5" className="card_title_center">

                        <Alert color="primary">
                          {data[0].titre}
                        </Alert>

                      </CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        {
                          data[1].map((categorie) =>
                            <span key={categorie.labelle} > {categorie.labelle} </span>
                          )

                        }
                      </CardSubtitle>
                    </CardBody>
                    <img className="actu_details_image" src={data[0].lien} alt="poste_image" />
                    <CardBody>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">Date : {data[0].date_envoie}</CardSubtitle>
                    </CardBody>
                  </NavLink>
                </Card>
              </div>
            )
          } else {
            return null
          }

        }) : null
    }

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
  deleteRessourceById: id => dispatch(deleteRessourceById(id))
})

const ActuDetails = connect(
  mstp,
  mdtp
)(ConnectedActuDetails)

export default ActuDetails;