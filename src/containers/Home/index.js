import React, { Component } from 'react';
import "./style.css";

// components
import ActuPage from "../../components/ActuPage";

class Home extends Component {
  render() {
    return (
      <>
        {// TOPNAVBAR DE THIBAUT
        }
        <h2 className="fil_title_center">Fil d'actualité</h2>
        <ActuPage />
      </>
    );
  }
}

export default Home;
