import React, { Component } from 'react';
import "./style.css";

import Register from '../../components/Register';
import NavBar from '../../components/NavBar'

class RegisterPage extends Component {

    render() {
        return (
            <>
                <NavBar />
                <Register />
            </>
        );
    }
}

export default RegisterPage;