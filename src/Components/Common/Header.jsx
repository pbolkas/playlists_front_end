import React from 'react'
import { AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
const useStyles= makeStyles(theme=> ({
  appBar:{
    padding: theme.spacing(2),
  }
}))

const Header = () =>{
  const classes = useStyles();
  return <AppBar className={classes.appBar} position={'relative'}>
    my app bar
  </AppBar>
}

export default Header;