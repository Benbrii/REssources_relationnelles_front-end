import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
// history
import { createBrowserHistory } from "history";

// router
import { Router, Route } from "react-router-dom";

// containers
import Home from "./containers/Home";
import Profil from "./containers/Profil";
import ConnexionPage from "./containers/connexionPage";
import RegisterPage from "./containers/RegisterPage";

import {authControl} from "./actions/auth.action"

axios.defaults.withCredentials = true;

const history = createBrowserHistory();

class App extends Component {
  
  componentDidMount(){
    this.props.authControl();
  }

  render() {
    console.log("TOKEN",this.props.islogged)
    const { islogged } = this.props;

    return (
      <>
          {islogged ? (
            <Router history={history}>
                <Route exact path="/" component={Home} />
                <Route exact path="/profil" component={Profil} />
            </Router>

          ) : (
              <Router history={history}>
                <Route exact path="/" component={ConnexionPage} />
                <Route exact path="/RegisterPage" component={RegisterPage} />
              </Router>
            )
          }
      </>
    );
  }
}

function mapStateToProps(state) {

  return {
    islogged: state.connectReducer.islogged
  };
}

function mapDispatchToProps(dispatch) {
    
  return {
    authControl: none => dispatch(authControl())
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
