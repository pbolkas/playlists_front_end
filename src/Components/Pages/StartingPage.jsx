import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Common/Header';
import { Route} from 'react-router-dom';
import PlaylistsPage from './PlaylistsPage';
import { makeStyles, CssBaseline } from '@material-ui/core';
import EnterPage from './EnterPage';

const styles = makeStyles(theme => ({
    root:{
      display: 'flex',
    },
    content: {
      height: '100vh',
    },
}))

const StartingPage = ({classes,match}) =>{
    // const classes = useStyles();
    return <div className={classes.root}>
      
      <CssBaseline />
      
      <Header />

      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        
        <Route exact path='/login' component={EnterPage}/>
        
        <Route exact path= {match.path} component={PlaylistsPage}/>
      </main>
    </div>
}
StartingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(StartingPage);
