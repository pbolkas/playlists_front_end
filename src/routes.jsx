import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './storeConfig';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './Components/Pages/LoginPage';
import SubscribePage from './Components/Pages/SubscribePage';
import StartingPage from './Components/Pages/StartingPage';


const Routes = () => {
  // const userLoggedIn= true;
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/register' component={SubscribePage}/>
        <Route exact path='/' component={StartingPage}/>
      </Switch>
    </ConnectedRouter>
  )
}

export default Routes;