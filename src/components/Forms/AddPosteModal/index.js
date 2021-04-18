import React, { Component } from 'react';
import { connect } from "react-redux";
import "./style.css";

// redux
import { addPosteToCloud } from "../../../actions/ressource.action";

// reactstrap
import {
  Button,
  ModalHeader, ModalFooter,
  Form, Label, Input,
  FormGroup, FormText
} from 'reactstrap';

class ConnectedAddPosteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      ChooseCategories: [],
      type: "photo",
      description: "",
      privee: 0,
      selectedFile: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { title, selectedFile, ChooseCategories, type, description, privee } = this.state;
    console.log("ChooseCategories", ChooseCategories)
    const { userID } = this.props;

    let formData = new FormData();
    formData.append("selectedFile", selectedFile);
    formData.append("title", title);
    formData.append("categorie", ChooseCategories);
    formData.append("type", type);
    formData.append("description", description);
    formData.append("privee", privee);
    formData.append("userID", userID);


    if (title.length > 0) {
      await this.props.addPosteToCloud(formData);
    } else {
      alert("Le titre d'un poste ne peut pas être vide !");
    }

    this.setState({
      title: "",
      ChooseCategories: [],
      type: "photo",
      description: "",
      privee: 0,
      selectedFile: null
    });

    window.location.reload(false);
  }

  render() {
    const { categories, types } = this.props
    const { ChooseCategories } = this.state
    return (
      <div className="addpostemodal_container">
        <ModalHeader>
          Ajouter un poste
        </ModalHeader>
        <br />
        <Form
          className="modal_form_container"
          onSubmit={this.handleSubmit}
          id="addForm"
          encType="multipart/form-data"
        >
          <FormGroup>
            <Label for="exampleTitle">Titre</Label>
            <Input
              type="title"
              name="title"
              id="exampleTitle"
              placeholder="Indiquer le titre du poste"
              onChange={e => {
                this.setState({ title: e.target.value });

                e.preventDefault();
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="selectedFile">Fichier</Label>
            <Input
              type="file"
              name="selectedFile"
              id="file"
              onChange={e => {
                this.setState({ selectedFile: e.target.files[0] });
                e.preventDefault();
              }}
            />
            <FormText color="muted">
              Sélectionnez une image ou une vidéo pour votre poste
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="theme">Catégories</Label>
            <Input type="select" name="categorie" id="categorie" onChange={e => {

              if (e.target.value !== "Choisir catégories...") {
                this.setState({ ChooseCategories: [...this.state.ChooseCategories, e.target.value] });
              }
              e.preventDefault();
            }}>

              <option key="none">Choisir categorie...</option>
              {
                categories.map((categorie) =>
                  <option key={categorie.id}>{categorie.labelle}</option>
                )
              }
            </Input>
            <div>
              Catégories : {
                ChooseCategories.map((ChooseCategorie) =>
                  <span key={ChooseCategorie}>{ChooseCategorie} </span>
                )
              }
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="type">Type de la ressource</Label>
            <Input type="select" name="type" id="type" onChange={e => {
              this.setState({ type: e.target.value });
              e.preventDefault();
            }}>
              {
                types.map((type) =>
                  <option key={type.id}>{type.labelle}</option>
                )
              }
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description | Contenu de la ressource</Label>
            <Input type="textarea" name="description" id="description" onChange={e => {
              this.setState({ description: e.target.value });
              e.preventDefault();
            }} />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="privee" onChange={e => {
                this.setState({ privee: 1 });
                console.log(this.state.privee);
                e.preventDefault();
              }} />{' '}
              Rendre ce poste privé
          </Label>
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
    userID: state.userReducer.user.id,
    categories: state.adminReducer.categories,
    types: state.adminReducer.types,

  }
};

const mdtp = dispatch => ({
  addPosteToCloud: (formData) =>
    dispatch(addPosteToCloud(formData)),
});

const AddPosteModal = connect(
  mstp,
  mdtp
)(ConnectedAddPosteModal);

export default AddPosteModal;