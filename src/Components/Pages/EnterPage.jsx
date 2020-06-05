import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import LoginPanel from '../Subscription/LoginPanel';
import RegisterPanel from '../Subscription/RegisterPanel';

const useStyles = makeStyles(theme=>({
  root :{
    padding: theme.spacing(2)
  }
}));

const EnterPage = () =>{
  const classes = useStyles();

  return <div className={classes.root}>
  <Grid container spacing={2} className={classes.root}>
    <Grid item xs={12} md={6}>
      <LoginPanel/>
    </Grid>
    <Grid item xs={12} md={6}>
      <RegisterPanel/>
    </Grid>

  </Grid>
  </div>
}

export default EnterPage;