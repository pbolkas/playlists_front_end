import React from 'react'
import { Paper, makeStyles, Typography } from '@material-ui/core';

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
      Here we display a list with all the songs that exist inside a list (a change)
    </Paper>
  </>
}

export default CurrentPlaylist;