import React, { Component } from 'react';
import { connect } from "react-redux";
import "./style.css";

// redux
//import { addDocToCloud } from "../../../actions/documents.action";

// reactstrap
import {
  Button,
  ModalHeader, ModalFooter,
  Form, Label, Input,
  FormGroup, FormText
} from 'reactstrap';

// react calendar
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

class ConnectedAddPosteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      categorie: "Autre",
      methodologie: "Non défini",
      selectedFile: null,
      formatedDate: new Date().toLocaleDateString("fr-FR")
    }

    this.onChange1 = this.onChange1.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*onChange1(initDate) {

    const date = initDate.toLocaleDateString("fr-FR");

    this.setState({ formatedDate: date });

  }

  async handleSubmit(e) {
    e.preventDefault();
    const { title, selectedFile, formatedDate, categorie, methodologie } = this.state;

    let serviceId = e.target.serviceId.value;
    let serviceName = e.target.serviceName.value;
    let serviceNiveau = e.target.serviceNiveau.value;

    let formData = new FormData();
    formData.append("selectedFile", selectedFile);
    formData.append("title", title);
    formData.append("serviceId", serviceId);
    formData.append("selectedDate", formatedDate);
    formData.append("categorie", categorie);
    formData.append("serviceName", serviceName);
    formData.append("serviceNiveau", serviceNiveau);
    formData.append("methodologie", methodologie)

    if (title.length > 0) {
      await this.props.addDocToCloud(formData);
    } else {
      alert("Le titre d'un document ne peut pas être vide !");
    }

    this.setState({
      title: "",
      cateogire: "Autre",
      methodologie: "Non défini",
      selectedFile: null
    });

    window.location.reload(false);
  }*/

  render() {
    const { formatedDate } = this.state;
    const { services } = this.props;

    // get id from url
    let full_url = document.URL;
    let url_array = full_url.split('/')
    let id = url_array[url_array.length - 1];

    // eslint-disable-next-line
    let selectedService = services.filter(service => service.id == id);

    /* const isTodayDate = moment(new Date(), "DD/MM/YYYY")
      .toDate()
      .toLocaleDateString("fr-FR"); */

    console.log(formatedDate);

    return (
      <div>
        <ModalHeader>
          Ajouter un document
        </ModalHeader>
        <br />
        <Form
          className="modal_form_container"
          onSubmit={this.handleSubmit}
          id="addForm"
          encType="multipart/form-data"
        >
          {
            selectedService.map(serv => (
              <div key={serv.id}>
                <Input
                  className="modal_servicesid_hide"
                  type="serviceId"
                  name="serviceId"
                  defaultValue={serv.id}
                />
                <Input
                  className="modal_servicesid_hide"
                  type="serviceName"
                  name="serviceName"
                  defaultValue={serv.name}
                />
                <Input
                  className="modal_servicesid_hide"
                  type="serviceNiveau"
                  name="serviceNiveau"
                  defaultValue={serv.niveau}
                />
              </div>
            ))
          }

          <FormGroup>
            <Label for="exampleTitle">Titre</Label>
            <Input
              type="title"
              name="title"
              id="exampleTitle"
              placeholder="Indiquer le titre du document"
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
              Afin d'obtenir une URL compréhensible auprès du CHU de Lille, il est préférable de renommer son fichier au bon intitulé.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="categorie">Catégorie</Label>
            <Input type="select" name="categorie" id="categorie" onChange={e => {
              this.setState({ categorie: e.target.value });
              e.preventDefault();
            }}>
              <option>Autre</option>
              <option>Fiche d'intervention</option>
              <option>Fiche matériel</option>
              <option>Compte-rendu</option>
              <option>Note de calcul</option>
              <option>Schéma de principe</option>
              <option>Plan</option>
              <option>Procédure</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="methodologie">Méthodologie préparation hygiène</Label>
            <Input type="select" name="methodologie" id="methodologie" onChange={e => {
              this.setState({ methodologie: e.target.value });
              e.preventDefault();
            }}>
              <option>Non défini</option>
              <option>FTI-01</option>
              <option>FTI-02</option>
              <option>FTI-03</option>
              <option>FTI-04</option>
              <option>FTI-05</option>
            </Input>
          </FormGroup>
          <Label for="exampleFile">Date de validation du document souhaité</Label>
          <FormGroup className="calendar_container">
            <DatePicker
              selected={moment(formatedDate, "DD/MM/YYYY").toDate()}
              minDate={moment().toDate()}
              onChange={this.onChange1}
              name="selectedDate"
              type="selectedDate"
              id="selectedDate"
              inline
            />
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
};

const mdtp = dispatch => ({
});

const AddPosteModal = connect(
  mstp,
  mdtp
)(ConnectedAddPosteModal);

export default AddPosteModal;