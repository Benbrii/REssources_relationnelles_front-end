import React, { Component } from 'react';
import "./style.css";
import { connect } from "react-redux";
// components
import ActuDetails from '../ActuDetails';
import AddPosteModal from "../../components/Forms/AddPosteModal";
// reactstrap
import { Container, Button, Modal, Input, Form, FormGroup, Row, Col } from 'reactstrap';


class ActuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ajoutationModalOpened: false,
      categorie: "toute categories",
      type: "tout types"
    }
  }


  // MODAL AJOUTATION

  openAjoutationModal = () => {
    this.setState({
      ajoutationModalOpened: true
    });
  };

  closeAjoutationModal = () => {
    this.setState({
      ajoutationModalOpened: false
    });
  };

  render() {

    const {
      ajoutationModalOpened,
      categorie,
      type
    } = this.state;

    const {
      types
    } = this.props;
    console.log("ACTU ", categorie, type)
    return (
      <>
        <Container className="actu_page_container">
          <Row>
            <Col>
              <Form className="actufil_form_wrapper">
                <FormGroup>
                  <h5 htmlFor="exampleSelect" className="filters_text">Filtrer par categorie</h5>
                  <Input
                    type="select"
                    name="categorie"
                    id="categorie"
                    onChange={e => {
                      e.preventDefault();
                      if (e.target.value !== "Tous") {
                        this.setState({ categorie: e.target.value });
                      } else {
                        this.setState({ categorie: "" })
                      }
                    }}
                    className="filter_form_categorie_input">
                    <option key="toute categories">Toute categories</option>
                    <option key="information">Information</option>
                    <option key="actualité">Actualité</option>
                    <option key="personnel">Personnel</option>
                    <option key="société">Société</option>
                    <option key="santé">Santé</option>
                    <option key="autres">Autres</option>
                  </Input>
                </FormGroup>
              </Form>
            </Col>
            <Col>
              <Form className="actufil_form_wrapper">
                <FormGroup>
                  <h5 htmlFor="exampleSelect" className="filters_text">Filtrer par type</h5>
                  <Input
                    type="select"
                    name="type"
                    id="type"
                    onChange={e => {
                      e.preventDefault();
                      if (e.target.value !== "Tous") {
                        this.setState({ type: e.target.value });
                      } else {
                        this.setState({ type: "" })
                      }
                    }}
                    className="filter_form_categorie_input">
                    <option key="toute categories">Tout types</option>
                    {
                      types.map((type) =>
                        <option key={type.id}>{type.labelle}</option>
                      )
                    }
                  </Input>
                </FormGroup>
              </Form>
            </Col>
          </Row>

          {this.props.isLogged === true ?
            <div>
              <div className="actu_page_add_button_container">
                <Button color="info" className="actu_page_add_button" onClick={() => this.openAjoutationModal()}>Ajouter un poste</Button>{' '}
              </div>
            </div>
            : null}
          <div>
            <div className="actu_details_container">
              <ActuDetails whichCategorie={categorie} whichType={type} />
            </div>
          </div>

        </Container>

        {/* MODALS */}
        {
          this.props.isLogged === true ?
            ajoutationModalOpened &&
            <Modal isOpen={ajoutationModalOpened} toggle={this.closeAjoutationModal}>
              <AddPosteModal />
            </Modal>
            : null
        }

      </>
    );
  }
}

function mapStateToProps(state) {

  return {
    types: state.adminReducer.types,
    isLogged: state.connectReducer.isLogged
  };
}

export default connect(mapStateToProps)(ActuPage);


