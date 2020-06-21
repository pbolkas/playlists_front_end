import React, { useEffect } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, CircularProgress, makeStyles } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { playlistsSelector, playlistsLoadingSelector, playlistsErrorSelector } from '../../Selectors/playlistSelector';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { getAllPlaylistsRequestAction } from '../../Actions';

const useStyles = makeStyles(theme => ({
  root:{
    overflowY: "scroll",
    maxHeight: 300
  },
}))

const PlaylistsList = ()=>{
  const classes = useStyles();
  const dispatch = useDispatch();

  const playlists = useSelector(playlistsSelector);
  const playlistsLoading = useSelector(playlistsLoadingSelector);
  const playlistsError = useSelector(playlistsErrorSelector);
  

  useEffect(() => {
    dispatch(getAllPlaylistsRequestAction());
  },[dispatch])

  if(playlistsLoading)
  {
    return <>
      <CircularProgress />
    </>
  }

  if(playlistsError !== null)
  {
    return <>
      There has been an error
    </>
  }

  if(playlists.length < 1 && playlistsError === null)
  {
    return <>
      This list is empty
    </>
  }

  return <>
  <List className = {classes.root}>
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