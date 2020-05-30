import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './storeConfig';
import { Switch, Route } from 'react-router-dom';
import StartingPage from './Components/Pages/StartingPage';


const Routes = () => {
  // const userLoggedIn= true;
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/' component={StartingPage}/>
      </Switch>
    </ConnectedRouter>
  )
}

export default Routes;