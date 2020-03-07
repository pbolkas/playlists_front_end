import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Common/Header';
import { Route } from 'react-router-dom';
import PlaylistsPage from './PlaylistsPage';
import { makeStyles, CssBaseline } from '@material-ui/core';

const styles = makeStyles(theme => ({
    root:{
      display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      padding: theme.spacing(3),
      overflow: 'auto',
    },
}))

const StartingPage = ({classes,match}) =>{
    // const classes = useStyles();

    return <div className={classes.root}>
      
      <CssBaseline />
      
      <Header />

      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <Route exact path= {match.path} component={PlaylistsPage}/>
      </main>
    </div>
}
StartingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(StartingPage);
