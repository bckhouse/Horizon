import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './components/auth/SignIn'; // Korrigierter Pfad
import Home from './components/Home';
// Weitere Importe, falls vorhanden

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/home" component={Home} />
        {/* Weitere Routen */}
        <Redirect from="/" to="/signin" />
      </Switch>
    </Router>
  );
};

export default App;
