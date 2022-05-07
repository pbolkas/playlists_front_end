import React from 'react'
import EditPlaylistButton from './EditPlaylistButton';
import DeletePlaylistButton from './DeletePlaylistButton';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import { Grid, IconButton } from '@material-ui/core';


const PlaylistListActions = ({ playlist, playing = false}) => {
  return <>
  <Grid container direction="row">
    <Grid item xs={playing? 4 :6}>
      <EditPlaylistButton title = {playlist.title} id = {playlist.id} />
    </Grid>
    <Grid item xs={playing? 4 :6}>
      <DeletePlaylistButton id = {playlist.id}/>
    </Grid>
    <Grid item xs={4 }>
      { playing && 
        <IconButton disabled={true}>
          <QueueMusicIcon />
        </IconButton>
      }
    </Grid>
  </Grid>
  </>
}

export default PlaylistListActions;
