import React, { Component } from 'react';
import "./style.css";


// components
import ActuPage from "../../components/ActuPage";
import NavBar from '../../components/NavBar'

class Home extends Component {
  render() {
    return (
      <>
          <NavBar/> 
        <h2 className="fil_title_center">Fil d'actualité</h2>
        <ActuPage />
      </>
    );
  }
}

export default Home;
