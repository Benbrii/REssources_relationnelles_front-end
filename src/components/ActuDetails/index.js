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
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getRessource();
  }

  render() {
    const { ressources } = this.props;
    console.log(ressources);

    return (
      <div>
        {
          ressources.length > 0 ?
            ressources.map(ressource => (
              ressource.private === "0" ?
                <div key={ressource.id}>
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5" className="card_title_center">
                        <NavLink href={`/ressource/${ressource.id}`} className="ressource_link">
                          <Alert color="primary">
                            {ressource.titre}
                          </Alert>
                        </NavLink>
                      </CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">{ressource.theme}</CardSubtitle>
                    </CardBody>
                    <img className="actu_details_image" src={ressource.lien} alt="poste_image" />
                    <CardBody>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">Date : {ressource.date_envoie}</CardSubtitle>
                    </CardBody>
                  </Card>
                </div>
                :
                null
            ))
            : <p>Aucune ressource n'a encore été ajoutée.</p>
        }
      </div>
    );
  }
}

const mstp = state => {
  return {
    ressources: state.ressource.ressources
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