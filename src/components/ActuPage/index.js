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
      categorie: "Toutes categories",
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
      categories,
      types
    } = this.props;
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
                      if (e.target.value !== "Toutes categories") {
                        this.setState({ categorie: e.target.value });
                      } 
                      else {this.setState({ categorie: "Toutes categories" })
                      }

                    }}
                    className="filter_form_categorie_input">
                    <option key="Toutes categories">Toutes categories</option>
                    {
                      categories.map((categorie) =>
                        <option key={categorie.id}>{categorie.labelle}</option>
                      )
                    }
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
                      <option key="Toutes categories">tout types</option>
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
          :null}
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
        :null
        }
        
      </>
    );
  }
}

function mapStateToProps(state) {

    return {
      categories: state.adminReducer.categories,
      types: state.adminReducer.types,
      isLogged: state.connectReducer.isLogged
    };
}

export default connect(mapStateToProps)(ActuPage);


