import React, { Component } from 'react';
import { connect } from "react-redux";
import "./style.css";

// redux
import { getRessourceById, getCommentsByRessourceId } from "../../actions/ressource.action";

//components
import AddCommentModal from "../../components/Forms/AddCommentModal";

// reactstrap
import { Jumbotron, Container, Button, ListGroup, ListGroupItem, Card, Row, Modal } from 'reactstrap';
import { IoIosStarOutline } from 'react-icons/io';

class ConnectedRessourceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ajoutationCommentModalOpened: false,
    }
  }

  componentDidMount() {
    let full_url = document.URL;
    let url_array = full_url.split('/')
    let id = url_array[url_array.length - 1];
    this.props.getRessourceById(id);
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

  render() {
    const { ressource, comments } = this.props;
    const { ajoutationCommentModalOpened } = this.state;
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
                    <div>
                      <Button color="info" onClick={() => this.openAjoutationCommentModal()}>Ajouter un commentaire</Button>{' '}
                    </div>
                    <br />
                    <h4>Commentaires</h4>
                    <ListGroup>
                      {
                        comments.length > 0 ?
                          comments.map(comment => (
                            <div>
                              <Container>
                                <Row className="comments_row_displayer">
                                  <Card>
                                    <h5>{comment.pseudo_compte}</h5>
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
        {ajoutationCommentModalOpened &&
          <Modal isOpen={ajoutationCommentModalOpened} toggle={this.closeAjoutationCommentModal}>
            <AddCommentModal />
          </Modal>
        }
      </>
    );
  }
}

const mstp = state => {
  return {
    ressource: state.ressource.ressource,
    comments: state.ressource.comments,
  };
};

const mdtp = dispatch => ({
  getRessourceById: id => dispatch(getRessourceById(id)),
  getCommentsByRessourceId: id => dispatch(getCommentsByRessourceId(id))
})

const RessourceDetails = connect(
  mstp,
  mdtp
)(ConnectedRessourceDetails);

export default RessourceDetails;