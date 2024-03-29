import React from 'react'
import { Paper, makeStyles, Typography, Grid } from '@material-ui/core';
import Player from '../Player/Player';
import Playlist from './Playlist';

const useStyles = makeStyles(theme=>({
  
  paper:{
    padding: theme.spacing(2),
  }
}))

const CurrentPlaylist = () =>{
  const classes = useStyles();
  return<div>
    <Paper className={classes.paper}>
      <Typography variant="h5">
        Current Playlist
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <Playlist/>
        </Grid>
        <Grid item xs={12}>
          <Player/>
        </Grid>
      </Grid>
    </Paper>
  </div>
}

export default CurrentPlaylist;