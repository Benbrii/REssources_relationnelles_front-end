import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/index';
import "./style.css";

import {sendUser} from "../../api/users.api"

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: null,
                lastName: null,
                email: null,
                password1: null,
                password2: null,
                birthDate: null,
                phoneNumber: null
            }
        };

        this.goRegister = this.goRegister.bind(this);
        this.formularValidation = this.formularValidation.bind(this)
    }

    goRegister(e) {
        e.preventDefault()

        const { user } = this.state;
        this.props.registerUser(user);
    }

    formularValidation(){
    const{validation} = this.props
        if(validation === false){
            return <div className="alert alert-danger col-sm-9 col-sm-offset-3" >le formulaire est mal remplie.</div> 
        }
        

    }
    render() {

        const{validation} = this.props
        console.log("MESSAGE",validation)
        return (
            <div className="container">
                <form className="form-horizontal" >
                   
                    <h2>Registration</h2>
                    <div className="form-group">
                        <label htmlFor="firstName" className="col-sm-3 control-label">First Name</label>
                        <div className="col-sm-9">
                            <input type="text" id="firstName" placeholder="First Name"  className="form-control" autoFocus 
                                onChange={e => { this.setState({ user: { ...this.state.user, firstName: e.target.value } }); e.preventDefault(); }} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" className="col-sm-3 control-label">Last Name</label>
                        <div className="col-sm-9">
                            <input type="text" id="lastName" placeholder="Last Name"  className="form-control"
                                onChange={e => { this.setState({ user: { ...this.state.user, lastName: e.target.value } }); e.preventDefault(); }} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="col-sm-3 control-label">Email* </label>
                        <div className="col-sm-9">
                            <input type="email" id="email" placeholder="Email"  className="form-control" name="email"
                                onChange={e => { this.setState({ user: { ...this.state.user, email: e.target.value } }); e.preventDefault(); }} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="col-sm-3 control-label">Password*</label>
                        <div className="col-sm-9">
                            <input type="password" id="password1" placeholder="Password"  className="form-control" 
                                onChange={e => { this.setState({ user: { ...this.state.user, password1: e.target.value } }); e.preventDefault(); }} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="col-sm-3 control-label">Confirm Password*</label>
                        <div className="col-sm-9">
                        <input type="password" id="password2" placeholder="Password"  className="form-control" 
                                onChange={e => { this.setState({ user: { ...this.state.user, password2: e.target.value } }); e.preventDefault(); }} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthDate" className="col-sm-3 control-label">Date of Birth*</label>
                        <div className="col-sm-9">
                            <input type="date" id="birthDate" className="form-control" 
                                onChange={e => { this.setState({ user: { ...this.state.user, birthDate: e.target.value } }); e.preventDefault(); }} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber" className="col-sm-3 control-label">Phone number </label>
                        <div className="col-sm-9">
                            <input type="phoneNumber" id="phoneNumber" placeholder="Phone number" className="form-control"
                                onChange={e => { this.setState({ user: { ...this.state.user, phoneNumber: e.target.value } }); e.preventDefault(); }} />
                            <span className="help-block">Your phone number won't be disclosed anywhere </span>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-9 col-sm-offset-3">
                            <span className="help-block">*Required fields</span>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block col-sm-9 col-sm-offset-3" onClick={this.goRegister} >Register</button>
                    {this.formularValidation()}
                        
                </form>
                
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {
        validation: state.registerReducer.validation
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        registerUser: user => dispatch(registerUser(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);