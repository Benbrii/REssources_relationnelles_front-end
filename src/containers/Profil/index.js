import React, { Component } from 'react';
import "./style.css";
import { connect } from 'react-redux';

// components
import Evenement from "../../components/Evénements";
import NavBar from '../NavBar'
import Footer from "../../components/Footer";

import {authControl} from "../../actions/connexion.action"
class Profil extends Component {

  componentDidMount(){
    this.props.authControl().then(() => {
      if (this.props.isLogged === false) {
        window.location.href = '/connexion'
      }
    }).catch(()=>{
      if (this.props.isLogged === false) {
        window.location.href = '/connexion'
      }
    })  
  }

  render() {

    return (
      <div>
        <NavBar />
        <Evenement />
        <Footer />
      </div>
    );
  }
}


function mapStateToProps(state) {

  return {
    isLogged: state.connectReducer.isLogged
  };
}

function mapDispatchToProps(dispatch) {

  return {
    authControl: () => dispatch(authControl())
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Profil);
