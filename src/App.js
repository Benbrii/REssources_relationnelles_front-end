import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Evenements from './pages/Evenements';
import Navigation from './Components/Navigation';
import Groupe from './pages/Groupe';
import NotFound from './pages/NotFound';
import './App.styles.css';

const App = () => {
  return (
    <main className="Main">

      <div className="Navigation">
        <Navigation />
      </div>
      <div className="Content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Evenements" component={Evenements} />
          <Route path="/Groupe" component={Groupe} />
          <Route component={NotFound} />
        </Switch>
      </div>

    </main>
  );
};

export default App;