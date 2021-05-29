import React, { useState } from 'react'
import { Paper, makeStyles, Typography, Grid, FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { UserSubscribeRequest } from '../../Actions/UserActions';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  }
}));

const RegisterPanel = () => {

  const classes = useStyles();

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
 
  const subscribe = (evt) => {
    evt.preventDefault();
    dispatch(UserSubscribeRequest(email, password));
  }

  return <>
    <Paper className={classes.paper}>
      <Typography variant="h5" align="center">Register</Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Email address</InputLabel>
              <Input fullWidth onChange={(evt) => {setEmail(evt.target.value)}} />
              <FormHelperText>Please fill your email address</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Type your password</InputLabel>
              <Input type="password" fullWidth onChange={(evt)=>setPassword(evt.target.value)} />
              <FormHelperText>Please enter your password</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Confirm your password</InputLabel>
              <Input type="password" fullWidth onChange={(evt)=>setPasswordConfirm(evt.target.value)} />
              <FormHelperText>Confirm your password</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" disabled={password.length <  8 || password !== passwordConfirm} fullWidth variant="contained" onClick={subscribe}>Subscribe</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  </>
}

export default RegisterPanel;