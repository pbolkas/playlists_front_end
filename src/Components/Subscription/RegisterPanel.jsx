import React from 'react'
import { Paper, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme =>({
  paper:{
    padding: theme.spacing(2),
  }

}))

const RegisterPanel = () => {

  const classes = useStyles();

  return <>
  <Paper className={classes.paper}>
    <Typography variant="h5" align="center">Register</Typography>

  </Paper>
  </>
}

export default RegisterPanel;