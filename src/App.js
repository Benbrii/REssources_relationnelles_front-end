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

axios.defaults.withCredentials = true;

export const history = createBrowserHistory();

class App extends Component {

  render() {
    console.log(this.props.connexion)
    return (
      <>
          

              <Router history={history}>
                <Route exact path="/" component={Home} />
                <Route exact path="/profil" component={Profil} />
              </Router>
          

              <Router history={history}>
                <Route exact path="/connexionPage"  component={ConnexionPage}/>
                <Route exact path="/RegisterPage" component={RegisterPage} />
              </Router>
           
      </>
    );
  }
}

function mapStateToProps(state) {

  return {
    connexion: state.connectReducer.connexion

  };
}


export default connect(mapStateToProps)(App);
