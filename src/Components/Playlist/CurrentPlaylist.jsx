import React from 'react'
import { Paper, makeStyles, Typography, Grid } from '@material-ui/core';
import Player from '../Player/Player';

const useStyles = makeStyles(theme=>({
  paper:{
    padding: theme.spacing(2),
  }
}))

const CurrentPlaylist = () =>{
  const classes = useStyles();
  return<>
    <Paper className={classes.paper}>
      <Typography variant="h5">
        Current Playlist
      </Typography>
      {/* In the grid below we have to grid items (for the list of the songs & for the player buttons (play,pause,next, previous etc)) */}
      <Grid container>
        <Grid item xs={12}>
          Song list
        </Grid>
        <Grid item xs={12}>
          <Player/>
        </Grid>
      </Grid>
    </Paper>
  </>
}

export default CurrentPlaylist;