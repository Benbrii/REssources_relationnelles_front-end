import React, { Component } from 'react';
//import "./style.css";

import Connection from '../../components/connection';
import NavBar from '../../components/NavBar'

class RegisterPage extends Component {

    render() {
        return (
            <>
                <NavBar />
                <Connection />
            </>
        );
    }
}

export default RegisterPage;