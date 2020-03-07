import React from 'react'
import { makeStyles, Typography, Grid, Paper } from '@material-ui/core';
import CurrentPlaylist from '../Playlist/CurrentPlaylist';
const useStyles = makeStyles(theme=>({
  page:{
    padding:theme.spacing(2),
  },
  paper:{
    padding:theme.spacing(2),
  }
}))
// this is a sample to play music using js
// const audio = new Audio("http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3");
// audio.volume = 0.3;
// audio.play();
const PlaylistsPage = ()=>{
  
  const classes = useStyles();
  return<div className={classes.page}>
    <Typography variant="h4" gutterBottom component="h2">
      Playlist App
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <CurrentPlaylist/>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          Playlists list
        </Paper>
      </Grid>
    </Grid>
  </div>
}

export default PlaylistsPage;