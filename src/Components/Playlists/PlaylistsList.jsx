import React from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { playlistsSelector } from '../../Selectors/playlistSelector';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const PlaylistsList = ()=>{
  const playlists = useSelector(playlistsSelector);

  if(playlists.length < 1 )
  {
    return <>
    This list is empty
    </>
  }

  return <>
  <List>
  {playlists.map((p,idx) =>{
    return (
      <ListItem key = {idx} button>
        <ListItemText primary={`${p.title}`}/>
      <ListItemSecondaryAction>
        <IconButton>
          <EditIcon/>
        </IconButton>
        <IconButton>
          <DeleteIcon/>
        </IconButton>
      </ListItemSecondaryAction>
      </ListItem>
    );
  } )}
  </List>
  </>
}

export default PlaylistsList;