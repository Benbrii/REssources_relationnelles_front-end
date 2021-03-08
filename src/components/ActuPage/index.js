import React, { Component } from 'react';
import "./style.css";

// components
import ActuDetails from '../ActuDetails';
import AddPosteModal from "../../components/Forms/AddPosteModal";

// reactstrap
import { Container, Button, Modal } from 'reactstrap';
import { connect } from 'react-redux';
import { authControl } from '../../actions/connexion.action';

class ActuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ajoutationModalOpened: false
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
      ajoutationModalOpened
    } = this.state;

    return (
      <>
        <Container className="actu_page_container">
          <div className="actu_page_add_button_container">
            <Button color="info" className="actu_page_add_button" onClick={() => this.openAjoutationModal()}>Ajouter un poste</Button>{' '}
          </div>
          <div className="actu_details_container">
          {this.props.isLogged === true?
             <ActuDetails />
          :null
          }
           
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

