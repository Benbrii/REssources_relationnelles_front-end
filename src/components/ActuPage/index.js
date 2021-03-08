import React, { Component } from 'react';
import "./style.css";
import { connect } from "react-redux";
// components
import ActuDetails from '../ActuDetails';
import AddPosteModal from "../../components/Forms/AddPosteModal";
import { authControl } from "../../actions/connexion.action"
// reactstrap
import { Container, Button, Modal, Input, Form, FormGroup, Row, Col } from 'reactstrap';


class ActuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ajoutationModalOpened: false,
      theme: "",
      type: "",
    }
  }


  componentDidMount() {
    this.props.authControl().then(() => {
      console.log("authControl isLogged then: ",this.props.isLogged)
     
    }).catch(
      (e) => {
        console.log("authControl isLogged catch: ",this.props.isLogged)
       
      }
    )
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
      theme,
      type
    } = this.state;

    return (
      <>
        <Container className="actu_page_container">
          <Row>
            <Col>
              <Form className="actufil_form_wrapper">
                <FormGroup>
                  <h5 for="exampleSelect" className="filters_text">Filtrer par thème</h5>
                  <Input
                    type="select"
                    name="theme"
                    id="theme"
                    onChange={e => {
                      e.preventDefault();
                      if (e.target.value !== "Tous") {
                        this.setState({ theme: e.target.value });
                      } else {
                        this.setState({ theme: "" })
                      }
                    }}
                    className="filter_form_theme_input">
                    <option>Tous</option>
                    <option>Covid-19</option>
                    <option>Information générale</option>
                    <option>Société</option>
                    <option>Santé</option>
                    <option>Autres</option>
                  </Input>
                </FormGroup>
              </Form>
            </Col>
            <Col>
              <Form className="actufil_form_wrapper">
                <FormGroup>
                  <h5 for="exampleSelect" className="filters_text">Filtrer par type</h5>
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
                    className="filter_form_theme_input">
                    <option>Tous</option>
                    <option>Vidéo</option>
                    <option>Article</option>
                    <option>Photo</option>
                    <option>Publication</option>
                  </Input>
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <div className="actu_page_add_button_container">
            <Button color="info" className="actu_page_add_button" onClick={() => this.openAjoutationModal()}>Ajouter un poste</Button>{' '}
          </div>
          <div className="actu_details_container">
            <ActuDetails whichTheme={theme} whichType={type} />
          </div>
        </Container>

        {/* MODALS */}
        {ajoutationModalOpened &&
          <Modal isOpen={ajoutationModalOpened} toggle={this.closeAjoutationModal}>
            <AddPosteModal />
          </Modal>
        }
      </>
    );
  }
}

function mapStateToProps(state) {

  return {
    isLogged: state.connectReducer.isLogged,
    authlevel: state.connectReducer.authlevel
  };
}

function mapDispatchToProps(dispatch) {

  return {
    authControl: none => dispatch(authControl())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActuPage);

