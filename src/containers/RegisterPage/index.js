import React, { Component } from 'react';
import "./style.css";

import Register from '../../components/Register';
import Footer from '../../components/Footer';
class RegisterPage extends Component {

    render() {
        return (
            <>
                <Register />
                <Footer/>
            </>
        );
    }
}

export default RegisterPage;