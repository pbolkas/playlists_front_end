import React from 'react'
import { Paper, makeStyles, Typography, Grid, FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  }

}))

const RegisterPanel = () => {

  const classes = useStyles();

  return <>
    <Paper className={classes.paper}>
      <Typography variant="h5" align="center">Register</Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Email address</InputLabel>
              <Input fullWidth onChange={() => { }} />
              <FormHelperText>Please fill your email address</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Type your password</InputLabel>
              <Input type="password" fullWidth onChange={() => { }} />
              <FormHelperText>Please enter your password</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Confirm your password</InputLabel>
              <Input type="password" fullWidth onChange={() => { }} />
              <FormHelperText>Confirm your password</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" onClick={()=>{}}>Subscribe</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  </>
}

export default RegisterPanel;