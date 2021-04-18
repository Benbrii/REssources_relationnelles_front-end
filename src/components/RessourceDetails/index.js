import React, { Component } from 'react';
import { connect } from "react-redux";
import "./style.css";

// redux
import {
  getRessourceById,
  getCommentsByRessourceId,
  addRessourceToFavoris,
  removeRessourceToFavoris
} from "../../actions/ressource.action";

//components
import AddCommentModal from "../../components/Forms/AddCommentModal";

// reactstrap
import { Jumbotron, Container, Button, ListGroup, ListGroupItem, Card, Row, Modal } from 'reactstrap';
import { IoIosStarOutline, IoIosStar } from 'react-icons/io';

class ConnectedRessourceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ajoutationCommentModalOpened: false,
      idRessource: null,
      favStar: false
    }
  }

  componentDidMount() {
    let full_url = document.URL;
    let url_array = full_url.split('/')
    let id = url_array[url_array.length - 1];

    console.log("CDM")

    const id_user = this.props.id_user
    this.props.getRessourceById({ id_user, id });
    this.props.getCommentsByRessourceId(id);
  }

  // MODAL AJOUTATION

  openAjoutationCommentModal = () => {
    this.setState({
      ajoutationCommentModalOpened: true
    });
  };

  closeAjoutationCommentModal = () => {
    this.setState({
      ajoutationCommentModalOpened: false
    });
  };

  async addToFavoris() {
    const { ressources, id_user } = this.props;

    let idRessource = ressources[0][0].id;

    const { favStar } = this.state;

    if (favStar === false) {
      await this.props.addRessourceToFavoris(id_user, idRessource);
      this.setState({
        favStar: true
      });
    } else {
      await this.props.removeRessourceToFavoris(id_user, idRessource);
      this.setState({
        favStar: false
      });
    }
  }

  render() {
    console.log("RENDER", this.props.id_user)
    const { ressources, comments } = this.props;
    const { ajoutationCommentModalOpened, favStar } = this.state;
    return (
      <>
        <h2 className="fil_title_center">Ressource</h2>
        {
          ressources.length > 0 ?
            ressources[0].map(ressource => (
              ressource.private === 0 ?
                <div className="ressource_details_wrapper" key={ressource.id}>
                  <Jumbotron fluid>
                    <Container fluid>
                      <h1 className="display-3">{ressource.titre}</h1>
                      <div className="ressource_title_row">
                        <p className="ressource_numéro">Ressource numéro : {ressource.id}</p>
                        <div className="ressource_favoris_row">
                          <div
                            onClick={() => this.addToFavoris()}
                          >
                            {
                              favStar === false ?
                                <IoIosStarOutline />
                                :
                                <IoIosStar />
                            }
                          </div>
                        </div>
                      </div>
                      <p className="lead">{ressource.categorie}</p>
                      <p className="lead">Ressource envoyée le : {ressource.date_envoie}</p>
                      <hr className="my-2" />
                      <img src={ressource.lien} className="ressource_details_image" alt="ressource_image" />
                      <hr className="my-2" />
                      <p className="ressource_text_wrapper">{ressource.description}</p>
                    </Container>
                    {this.props.isLogged === true ?
                      <div>
                        <Button color="info" onClick={() => this.openAjoutationCommentModal()}>Ajouter un commentaire</Button>{' '}
                      </div>
                      : null
                    }
                    <br />
                    <h4>Commentaires</h4>
                    <ListGroup>
                      {
                        comments.length > 0 ?
                          comments.map(comment => (
                            <div key={comment.id}>
                              <Container>
                                <Row className="comments_row_displayer">
                                  <Card>
                                    <h5>{comment.pseudo}</h5>
                                    <ListGroupItem>{' '}{comment.message}</ListGroupItem>
                                  </Card>
                                </Row>
                              </Container>
                            </div>
                          ))
                          :
                          <div>
                            Aucun commentaire n'a encore été publié sur cette ressource
                        </div>
                      }
                    </ListGroup>
                  </Jumbotron>
                </div>
                :
                null
            ))
            :
            null
        }
        {/* MODAL */}
        {this.props.isLogged === true ?
          ajoutationCommentModalOpened &&
          <Modal isOpen={ajoutationCommentModalOpened} toggle={this.closeAjoutationCommentModal}>
            <AddCommentModal />
          </Modal>
          : null
        }
      </>
    );
  }
}

const mstp = state => {
  return {
    ressources: state.ressource.ressource,
    comments: state.ressource.comments,
    id_user: state.userReducer.user.id,
    isLogged: state.connectReducer.isLogged
  };
};

const mdtp = dispatch => ({
  getRessourceById: id => dispatch(getRessourceById(id)),

  getCommentsByRessourceId: id => dispatch(getCommentsByRessourceId(id)),

  addRessourceToFavoris: (id_user, idRessource) =>
    dispatch(addRessourceToFavoris(id_user, idRessource)),

  removeRessourceToFavoris: (id_user, idRessource) =>
    dispatch(removeRessourceToFavoris(id_user, idRessource))
})

const RessourceDetails = connect(
  mstp,
  mdtp
)(ConnectedRessourceDetails);

export default RessourceDetails;