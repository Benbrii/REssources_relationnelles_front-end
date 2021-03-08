import React, { Component } from 'react';
import "./style.css";

// components

import RessourceDetails from "../../components/RessourceDetails";
import NavBar from '../NavBar';
// import Footer from '../../components/Footer';

class RessourceList extends Component {
    render() {
        return (
            <>
                <NavBar />
                <RessourceDetails />
            </>
        );
    }
}

export default RessourceList;