import React from 'react'
import { makeStyles, Typography, Grid} from '@material-ui/core';
import CurrentPlaylist from '../Playlist/CurrentPlaylist';
import AvailablePlaylists from '../Playlist/AvailablePlaylists';
import Alert from '../Common/Alert';
import LiveShareButton from '../Common/LiveShareButton';

const useStyles = makeStyles(theme=>({
  page:{
    padding:theme.spacing(2),
  },
  paper:{
    padding:theme.spacing(2),
  }
}))

const PlaylistsPage = ()=>{
  
  const classes = useStyles();
  return<div className={classes.page}>
    <Typography variant="h4" gutterBottom component="h2">
      Playlist App
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <CurrentPlaylist/>
      </Grid>
      <Grid item xs={12} md={6}>
        <AvailablePlaylists/>
      </Grid>
    </Grid>
    <Alert />
    <LiveShareButton />
  </div>
}

export default PlaylistsPage;