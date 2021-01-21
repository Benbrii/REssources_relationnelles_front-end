import React, { Component } from 'react';
import axios from "axios";

// history
import { createBrowserHistory } from "history";

// router
import { Router, Route } from "react-router-dom";

// containers
import Home from "./containers/Home";
import Profil from "./containers/Profil";
import RegisterPage from "./containers/RegisterPage";


axios.defaults.withCredentials = true;

const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <>
        <Router history={history}>
          <Route exact path="/" component={Home} />
          <Route exact path="/profil" component={Profil} />
          <Route exact path="/registerpage" component={RegisterPage} />
        </Router>
      </>
    );
  }
}

export default App;