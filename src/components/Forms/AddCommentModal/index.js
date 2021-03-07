import React, { Component } from 'react';
import { connect } from "react-redux";
import "./style.css";

// redux
import { addCommentToRessource } from "../../../actions/ressource.action";

// reactstrap
import {
  Button,
  ModalHeader, ModalFooter,
  Form, Label, Input,
  FormGroup
} from 'reactstrap';

class ConnectedAddCommentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentaire: null,
      idUser: null,
      pseudoUser: null,
      idRessource: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      idUser: this.props.id_user,
      pseudoUser: this.props.pseudo_user,
      idRessource: this.props.id_ressource
    })
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { commentaire, idUser, pseudoUser, idRessource } = this.state;

    if (commentaire.length > 0) {
      await this.props.addCommentToRessource(commentaire, idUser, pseudoUser, idRessource);
    } else {
      alert("Veuillez écrire un commentaire !");
    }

    this.setState({
      commentaire: null,
      idUser: null,
      pseudoUser: null,
      idRessource: null
    });

    window.location.reload(false);
  }

  render() {
    return (
      <div className="addpostemodal_container">
        <ModalHeader>
          Ajouter un commentaire
        </ModalHeader>
        <br />
        <Form
          className="modal_form_container"
          onSubmit={this.handleSubmit}
          id="addForm"
        >
          <FormGroup>
            <Label for="commentaire">Commentaire</Label>
            <Input type="textarea" name="commentaire" id="commentaire" onChange={e => {
              this.setState({ commentaire: e.target.value });
              e.preventDefault();
            }} />
          </FormGroup>
          <ModalFooter>
            <Button color="success" type="submit">Valider</Button>
          </ModalFooter>
        </Form>
      </div >
    );
  }
}

const mstp = state => {
  return {
    id_user: state.connectReducer.user.id,
    pseudo_user: state.connectReducer.user.pseudo,
    id_ressource: state.ressource.ressource[0].id
  };
};

const mdtp = dispatch => ({
  addCommentToRessource: (commentaire, idUser, pseudoUser, idRessource) =>
    dispatch(addCommentToRessource(commentaire, idUser, pseudoUser, idRessource)),
});

const AddCommentModal = connect(
  mstp,
  mdtp
)(ConnectedAddCommentModal);

export default AddCommentModal;