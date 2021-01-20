import React from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import Evenements from './pages/Evenements';
import Groupe from './pages/Groupe';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Evenements" component={Evenements} />
            <Route path="/Groupe" component={Groupe} />
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;