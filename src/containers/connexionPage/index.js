import React, { Component } from 'react';
//import "./style.css";

import Connexion from '../../components/connexion';
import Footer from '../../components/Footer'

class ConnectionPage extends Component {

    render() {
      
        return (
            <>
                <Connexion/>
                <Footer/>
            </>
        );
    }
}

export default ConnectionPage;