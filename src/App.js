import React, { Component } from 'react';

// history
import { createBrowserHistory } from "history";

// router
import { Router, Route } from "react-router-dom";

// containers
import Home from "./containers/Home";

const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <>
        <Router history={history}>
          <Route exact path="/" component={Home} />
        </Router>
      </>
    );
  }
}

export default App;
