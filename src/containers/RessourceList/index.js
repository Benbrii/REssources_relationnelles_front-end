import React, { Component } from 'react';
import "./style.css";

// components

import RessourceDetails from "../../components/RessourceDetails";
import NavBar from '../../components/NavBar';
// import Footer from '../../components/Footer';

class RessourceList extends Component {
    render() {
        return (
            <>
                <NavBar onClick={this.appearNavBar} />
                <RessourceDetails />
            </>
        );
    }
}

export default RessourceList;