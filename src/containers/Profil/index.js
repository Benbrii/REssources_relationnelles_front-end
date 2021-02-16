import React, { Component } from 'react';
import "./style.css";

// components
import Navigation from "../../components/Navigation";
import Evenement from "../../components/Evénements";
import NavBar from '../../components/NavBar'

class Profil extends Component {

  render() {
    return (
      <main className="Main">
        <NavBar />
        <Navigation />
        <Evenement />
      </main>
    );
  }
}

export default Profil;