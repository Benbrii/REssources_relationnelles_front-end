import React, { Component } from 'react';
import { connect } from 'react-redux';
import { connectUser } from '../../actions/index';
import "./style.css";

class Connection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                
                email: null,
                password: null
                
            }
        };

        this.goConnect = this.goConnect.bind(this);

    }

    goConnect(e) {

        e.preventDefault()

        const { user } = this.state;
        this.props.connectUser(user);
    }

    render() {
        return (
            <div className="container">
                <form className="form-horizontal" >
                    <h2>Connection</h2>
                    
                    <div className="form-group">
                        <label htmlFor="email" className="col-sm-3 control-label">Email* </label>
                        <div className="col-sm-9">
                            <input type="email" id="email" placeholder="Email" className="form-control" name="email"
                                onChange={e => { this.setState({ user: { ...this.state.user, email: e.target.value } }); e.preventDefault(); }} />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password" className="col-sm-3 control-label">Password*</label>
                        <div className="col-sm-9">
                            <input type="password" id="password" placeholder="Password" className="form-control" 
                                onChange={e => { this.setState({ user: { ...this.state.user, password: e.target.value } }); e.preventDefault(); }} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block col-sm-9 col-sm-offset-3" onClick={this.goConnect} >Connection</button>
                    <a href="/registerpage" className="btn btn-success btn-block col-sm-9 col-sm-offset-3" role="button">Create account</a>
                    
                </form>
                
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    
    return {
        
        connectUser: user => dispatch(connectUser(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Connection);