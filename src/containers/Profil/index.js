import React, { Component } from 'react';
import "./style.css";

// components
import Evenement from "../../components/Evénements";
import NavBar from '../NavBar'

import { connect } from 'react-redux';
import { authControl } from "../../actions/connexion.action"


class Profil extends Component {

  render() {

    this.props.authControl().then(() => {
      if (this.props.isLogged === false) {
        //window.location.href = "/";
      }
    }).catch(
      (e) => {
        //window.location.href = "/";
      }
    )

    return (
      <div>
        <NavBar />
        <Evenement />
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
    authControl: none => dispatch(authControl())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profil);