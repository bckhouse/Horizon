import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './views/auth/SignIn';
import Dashboard from './views/Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/dashboard" component={Dashboard} />
        {/* Weitere Routen */}
        <Redirect from="/" to="/signin" />
      </Switch>
    </Router>
  );
};

export default App;
