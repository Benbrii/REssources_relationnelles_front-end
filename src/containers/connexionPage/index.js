import React, { Component } from 'react';
//import "./style.css";

import Connexion from '../../components/connexion';
import Footer from '../../components/Footer'

//import { connect } from 'react-redux';
//import {authControl} from "../../actions/connexion.action"

class ConnectionPage extends Component {

    render() {

        return (
            <>
                <Connexion />
                <Footer />
            </>
        );
    }
}


export default ConnectionPage;