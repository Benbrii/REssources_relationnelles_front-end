import React, { Component } from 'react';
import "./style.css";

// components
import Evenement from "../../components/Evénements";
import NavBar from '../../components/NavBar'

class Profil extends Component {

  render() {
    return (
      <main className="Main">
        <NavBar />
        <Evenement />
      </main>
    );
  }
}

export default Profil;