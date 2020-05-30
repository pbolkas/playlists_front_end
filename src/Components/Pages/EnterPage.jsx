import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme=>({
  root :{
    padding: theme.spacing(2)
  }
}));

const EnterPage = () =>{
  const classes = useStyles();

  return <>
  <Grid container spacing={2} className = {classes.root}>
    <Grid item xs={12} md={6}>
      Login Space
    </Grid>
    <Grid item xs={12} md={6}>
      Register Space
    </Grid>

  </Grid>
  </>
}

export default EnterPage;