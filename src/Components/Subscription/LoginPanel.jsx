import React, { useState } from 'react'
import { Paper, makeStyles, Typography, Grid, Button, FormControl, InputLabel, Input, FormHelperText, CircularProgress } from '@material-ui/core'
import { UserLoginRequestAction } from '../../Actions/UserActions';
import { useSelector, useDispatch } from 'react-redux';
import { loginRequestedSelector } from '../../Selectors/userSelector';

const useStyles = makeStyles(theme =>({
  paper:{
    padding: theme.spacing(2),
  },
  flex: {
    display: 'flex'
  },
  loading: {
    margin: "auto",
  },
}))

const LoginPanel = () => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginRequested = useSelector(loginRequestedSelector);
  
  const classes = useStyles();

  const submitLogin = (evt) => {
    console.log(process.env.REACT_APP_API_HOST_PRODUCTION)
    console.log(process.env.REACT_APP_API_HOST_DEV)
    evt.preventDefault();

    dispatch(UserLoginRequestAction(email,password));
  }

  return <>
  <Paper className={classes.paper}>
    <Typography variant="h5" align="center">Login</Typography>
    <form>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Email address</InputLabel>
          <Input fullWidth onChange={(evt)=> setEmail(evt.target.value)}/>
          <FormHelperText>Please fill your email address</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Password</InputLabel>
          <Input type="password" fullWidth  onChange={(evt)=> setPassword(evt.target.value)}/>
          <FormHelperText>Please enter your password</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <div className= {classes.flex}>
          {
            loginRequested?
            <CircularProgress className={classes.loading} />:
            <Button type="submit" fullWidth variant="contained" onClick={submitLogin}>Login</Button>
          }
          </div>
      </Grid>
    </Grid>
    </form>
  </Paper>
  </>
}

export default LoginPanel;