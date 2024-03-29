import React from 'react'
import Header from '../Common/Header';
import { Route } from 'react-router-dom';
import PlaylistsPage from './PlaylistsPage';
import { makeStyles, CssBaseline } from '@material-ui/core';
import EnterPage from './EnterPage';
import { useSelector } from 'react-redux';
import { userLoggedInSelector } from '../../Selectors/userSelector';

const useStyles = makeStyles(theme => ({
    root:{
    },
    content: {
    },
}))

const StartingPage = ({match}) =>{
    const classes = useStyles();
    const userLoggedIn = useSelector(userLoggedInSelector);
    
    return <div className={classes.root}>
      
      <CssBaseline />
      
      <Header />

      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        
        {/* <Route exact path='/login' component={EnterPage}/> */}
        {/* <Route exact path='/app' component={PlaylistsPage} /> */}

        <Route exact path="/">
          {userLoggedIn? <PlaylistsPage/> : <EnterPage/> }
        </Route>

      </main>
    </div>
}

export default StartingPage;
