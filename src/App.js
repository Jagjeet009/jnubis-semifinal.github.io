import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Customer from './Customer';
import Contact from './Contact';
import Error from './Error';

const App = () => {
  return <>
    <Switch>
      <Route exact path='/' component={Customer} />
      <Route exact path='/contact' component={Contact} />
      <Route component={Error} />
    </Switch>

  </>;
};
export default App;