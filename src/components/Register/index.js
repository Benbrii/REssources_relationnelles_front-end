import React, { Component  } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/connexion.action';
import Modal from 'react-bootstrap/Modal'

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: null,
                firstName : null,
                lastName : null,
                password1 : null,
                password2 : null,
                pseudo: null,
                birthDate : null,
                adress : null,
                city : null,
                postalCode: null
            },
            modal:{
                setShow:false
            }
        };
    
        this.goRegister = this.goRegister.bind(this);
    }
  
     componentDidMount() {
        localStorage.setItem('user', JSON.stringify(this.state.user));

      }

    ErrorMessage(){

        const{validation} = this.props
        if(validation === false){
            return <div className="alert alert-danger" >le formulaire est mal remplie.</div> 
        }
    }

    goRegister(e) {

        e.preventDefault()
        this.props.registerUser(this.state.user);
        console.log("USER",this.state.user)
    }

   render(){
        return (
            <div className="container">
                <Modal.Header closeButton>
                    <Modal.Title>Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form-horizontal" >
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="firstName" className="control-label">First Name</label>
                                <input type="text" id="firstName" placeholder="First Name"  className="form-control" autoFocus 
                                onChange={e => { this.setState({ user: { ...this.state.user, firstName: e.target.value } }); e.preventDefault(); }} />
                              
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="lastName" className=" control-label">Last Name</label>
                                <input type="text" id="lastName" placeholder="Last Name"  className="form-control"
                                onChange={e => { this.setState({ user: { ...this.state.user,lastName: e.target.value} }); e.preventDefault(); }} />
                                
                            </div> 
                        </div>

                        <div className="row">
                            <div className="form-group col-sm-12">
                                <label htmlFor="email" className="control-label">Email* </label>
                            <input type="email" id="email" placeholder="Email"  className="form-control" name="email"
                                    onChange={e => { this.setState({ user: { ...this.state.user,email: e.target.value} }); e.preventDefault(); }} />
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="password" className="control-label">Password*</label>
                                <input type="password" id="password1" placeholder="Password"  className="form-control" 
                                        onChange={e => { this.setState({ user: { ...this.state.user,password1: e.target.value} }); e.preventDefault(); }} />
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="password" className="control-label">Confirm Password*</label>
                                <input type="password" id="password2" placeholder="Confirm password"  className="form-control" 
                                        onChange={e => { this.setState({ user: { ...this.state.user,password2: e.target.value} }); e.preventDefault(); }} />
                            
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="form-group form-group col-sm-12">
                                <label htmlFor="pseudo" className="control-label">Pseudo</label>
                                    <input type="pseudo" id="pseudo" placeholder="pseudo" className="form-control"
                                        onChange={e => { this.setState({ user: { ...this.state.user,pseudo: e.target.value} }); e.preventDefault(); }} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-sm-12">
                                <label htmlFor="birthDate" className="control-label">Date of Birth</label>
                            <input type="date" id="birthDate" className="form-control" 
                                    onChange={e => { this.setState({ user: { ...this.state.user,birthDate: e.target.value} }); e.preventDefault(); }} />
                        
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="form-group col-sm-12">
                                <label htmlFor="adress" className="control-label">Adress</label>
                            <input type="text" id="adress" placeholder="adress"  className="form-control"
                                    onChange={e => { this.setState({ user: { ...this.state.user,adress: e.target.value} }); e.preventDefault(); }} />
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="city" className="control-label">City</label>
                                <input type="text" id="city" placeholder="city"  className="form-control"
                                        onChange={e => { this.setState({ user: { ...this.state.user,city: e.target.value} }); e.preventDefault(); }} />
                            </div>
                            
                            <div className="form-group col-sm-6">
                                <label htmlFor="postalCode" className="control-label">Postal code</label>
                                <input type="text" id="postalCode" placeholder="postalCode"  className="form-control"
                                        onChange={e => { this.setState({ user: { ...this.state.user,postalCode: e.target.value} }); e.preventDefault(); }} />
                            </div>
                        </div>
                       
                        <div className="row">
                            <div className="form-group col-sm-12">
                                {this.ErrorMessage()}
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" className="btn btn-success btn-block col-sm-6 col-sm-offset-3" onClick={this.goRegister} >Sign up</button>
                </Modal.Footer>
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