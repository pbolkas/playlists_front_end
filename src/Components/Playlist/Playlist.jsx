import React from 'react'
import { Grid } from '@material-ui/core';
import AddNewSong from './AddNewSong';
import SongsOfPlaylist from './SongsOfPlaylist';

const Playlist = ()=>{

  return<Grid container>
    <Grid item xs={12}>
      <SongsOfPlaylist/>
    </Grid>
    <Grid item xs={12}>
      <AddNewSong/>    
    </Grid>
  </Grid>
}

export default Playlist;