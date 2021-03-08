import React, { Component } from 'react';
import { connect } from "react-redux";
import "./style.css";

// redux
import { getRessourceById } from "../../actions/ressource.action";

// reactstrap
import { Jumbotron, Container } from 'reactstrap';
import { IoIosStarOutline } from 'react-icons/io';

class ConnectedRessourceDetails extends Component {

  componentDidMount() {
    let full_url = document.URL;
    let url_array = full_url.split('/')
    let id = url_array[url_array.length - 1];
    this.props.getRessourceById(id);
    console.log(id);
  }

  render() {
    const { ressource } = this.props;
    console.log(ressource);
    return (
      <>
        <h2 className="fil_title_center">Ressource</h2>
        {
          ressource.length > 0 ?
            ressource.map(ressource => (
              ressource.private === "0" ?
                <div className="ressource_details_wrapper" key={ressource.id}>
                  <Jumbotron fluid>
                    <Container fluid>
                      <h1 className="display-3">{ressource.titre}</h1>
                      <div className="ressource_title_row">
                        <p className="ressource_numéro">Ressource numéro : {ressource.id}</p>
                        <div className="ressource_favoris_row">
                          <p>Ajouter à ses favoris</p>
                          <div>
                            <IoIosStarOutline />
                          </div>
                        </div>
                      </div>
                      <p className="lead">{ressource.theme}</p>
                      <p className="lead">Ressource envoyée le : {ressource.date_envoie}</p>
                      <hr className="my-2" />
                      <img src={ressource.lien} className="ressource_details_image" alt="ressource_image" />
                      <hr className="my-2" />
                      <p className="ressource_text_wrapper">{ressource.description}</p>
                    </Container>
                  </Jumbotron>
                </div>
                :
                null
            ))
            :
            null
        }
      </>
    );
  }
}

const mstp = state => {
  return {
    ressource: state.ressource.ressource
  };
};

const mdtp = dispatch => ({
  getRessourceById: id => dispatch(getRessourceById(id))
})

const RessourceDetails = connect(
  mstp,
  mdtp
)(ConnectedRessourceDetails);

export default RessourceDetails;