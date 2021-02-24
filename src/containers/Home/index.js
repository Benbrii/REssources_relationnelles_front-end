import React, { Component } from 'react';
import "./style.css";

// components
import ActuPage from "../../components/ActuPage";
import NavBar from '../NavBar'
import Footer from '../../components/Footer';
import { connect } from 'react-redux';
import { authControl } from "../../actions/connexion.action"

class Home extends Component {

  appearNavBar() {
    const navs = document.querySelectorAll('.navbar-collapse')
    navs.forEach(nav => nav.classList.toggle('collapse'));
  }

  render() {

    //On verifie la validité du token
    this.props.authControl().then(() => {
      if (this.props.isLogged === false) {
        //window.location.href = "/";
        console.log("ici je suis sencé redirect if")
      }
    }).catch(
      (e) => {
        //window.location.href = "/";
        console.log("ici je suis sencé redirect catch")
      }
    )

    return (
      <>
        <NavBar onClick={this.appearNavBar} />
        <h2 className="fil_title_center">Fil d'actualité</h2>
        <ActuPage />
        <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
