import React from 'react'
import { makeStyles, Paper, Typography, Grid } from '@material-ui/core';
import AddNewPlaylist from './AddNewPlaylist';
import PlaylistsList from '../Playlists/PlaylistsList';
const useStyles = makeStyles(theme=>({
  root:{

  },
  paper:{
    padding: theme.spacing(2),
  }
}))
const AvailablePlaylists = ()=>{
  const classes = useStyles();
  return <>
    <Paper className={classes.paper}>
      <Typography variant ="h5">
        Avalaible playlists
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          {/* List of playlists (contains buttons for each list (remove,edit)) */}
          <PlaylistsList/>
        </Grid>
        <Grid item xs={12}>
          <AddNewPlaylist/>
        </Grid>
      </Grid>    
    </Paper>
  </>
}

export default AvailablePlaylists;