import React, { Component } from 'react';
import { connect } from 'react-redux';
import { connectUser } from '../../actions/connexion.action';
import './style.css';
import Button from 'react-bootstrap/button'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Register from '../Register'
import CubePng from '../../images/CUBE.png'

import { history } from '../../App';
class Connexion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: null,
                password: null
            },
            modal:{
                setShow:false
            }
        };
        this.goConnect = this.goConnect.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this)
    }

    goConnect(e) {
        e.preventDefault()
        const { user } = this.state;
        this.props.connectUser(user).then(
            () => {
               window.location.href = "/";
            }
        )
    }

    handleShow(e){
        this.setState({ modal: {setShow: true }})
        console.log("SHOW",this.state.modal.setShow)
    }

    handleClose(e){
        this.setState({ modal: {setShow: false }})
        console.log(this.state.modal.setShow)
    }

    render() {
        console.log("CONNECTED:",this.props.connexion)

        return (
            <div className="container connexionPage">
                <div className="row">
                    <div className="col-md-6">
                        <Image src={CubePng} />
                    </div>

                    <form className="form-horizontal col-md-6 connexionForm">
                        <h2>Connection</h2>
                        
                        <div className="form-group">
                            <label htmlFor="email" className="col-sm-3 control-label">Email* </label>
                            <div className="col-sm-9">
                                <input type="email" id="email" placeholder="Email" className="form-control" name="email"
                                    onChange={e => { this.setState({ user: { ...this.state.user, email: e.target.value } }); e.preventDefault(); }}  />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="password" className="col-sm-3 control-label">mot de passe*</label>
                            <div className="col-sm-9">
                                <input type="password" id="password" placeholder="Password" className="form-control" 
                                    onChange={e => { this.setState({ user: { ...this.state.user, password: e.target.value } }); e.preventDefault(); }} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block col-sm-9 col-sm-offset-3" onClick={this.goConnect} >Sign in</button>
                        <Button variant="success" className="col-sm-9 col-sm-offset-3" onClick={this.handleShow}>Sign up</Button>
                    </form>
                </div>
                
                <Modal show={this.state.modal.setShow} onHide={this.handleClose}>
                    <Register/>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    
    return {
        connexion: state.connectReducer.connexion
    };
}


function mapDispatchToProps(dispatch) {
    
    return {
        connectUser: user => dispatch(connectUser(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Connexion);