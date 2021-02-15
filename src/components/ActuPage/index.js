import React, { Component } from 'react';
import "./style.css";

// components
import ActuDetails from '../ActuDetails';
import AddPosteModal from "../../components/Forms/AddPosteModal";

// reactstrap
import { Container, Button, Modal } from 'reactstrap';

class ActuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ajoutationModalOpened: false
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
      ajoutationModalOpened
    } = this.state;

    return (
      <>
        <Container className="actu_page_container">
          <div className="actu_page_add_button_container">
            <Button color="info" className="actu_page_add_button" onClick={() => this.openAjoutationModal()}>Ajouter un poste</Button>{' '}
          </div>
          <div className="actu_details_container">
            <ActuDetails />
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

export default ActuPage;
