import React, { useEffect } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, CircularProgress, makeStyles } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { playlistsSelector, playlistsLoadingSelector, playlistsErrorSelector, selectedPlaylistSelector } from '../../Selectors/playlistSelector';
import { getAllPlaylistsRequestAction, loadSongsRequestedAction } from '../../Actions';
import PlaylistListActions from '../Playlist/PlaylistActions/PlaylistListActions';

const useStyles = makeStyles(theme => ({
  broadcast:{
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
  const selectedPlaylist = useSelector(selectedPlaylistSelector);
  

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

  const loadPlaylistSongs = (id) =>{
    dispatch(loadSongsRequestedAction(id));
  }

  return <>
  <List className = {classes.root}>
  {playlists.map((p,idx) =>{
    const selected = p.id === selectedPlaylist;
    return (
      <ListItem selected={selected} key = {idx} button onClick={()=>loadPlaylistSongs(p.id)}>
        <ListItemText primary={`${p.title}`} />
        <ListItemSecondaryAction>
          <PlaylistListActions playlist = {p} playing = {selected} />          
        </ListItemSecondaryAction>
      </ListItem>
    );
  } )}
  </List>
  </>
}

export default PlaylistsList;