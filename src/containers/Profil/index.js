import React, { Component } from 'react';
import "./style.css";

// components
import Navigation from "../../components/Navigation";
import Evenement from "../../components/Evénements";
import NavBar from '../../components/NavBar'

import { connect } from 'react-redux';
import {authControl} from "../../actions/connexion.action"


class Profil extends Component {

  componentDidMount(){
    
    this.props.authControl().then(() =>{

        if (this.props.isLogged === false){
          console.log("AUTREDIRECT",this.props.isLogged)
         // window.location.href = "/connexionPage";
        }
        
      }).catch(
          () => {
                
            window.location.href = "/connexionPage";
           
          }
    )
  }

  render() {
    console.log("isLogged",this.props.isLogged)
    return (
      <main className="Main">
        <NavBar />
        <Navigation />
        <Evenement />
      </main>
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

export default connect(mapStateToProps,mapDispatchToProps)(Profil);