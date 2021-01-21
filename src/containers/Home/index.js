import React, { Component } from 'react';
import "./style.css";

// components
import ActuPage from "../../components/ActuPage";
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';

class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <h2 className="fil_title_center">Fil d'actualité</h2>
        <ActuPage />
        <Footer />
      </>
    );
  }
}

export default Home;