import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root:{
    display: 'flex',
  },
  content: {
    height: '100vh',
  },
}))

const LoginPage =()=>{
  const classes = useStyles();
  
  return <>
    Login Page
  </>
}

export default LoginPage;