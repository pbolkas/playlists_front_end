import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../Actions';
import { setSelectedSong } from '../../Actions';
import { songsSelector } from '../../Selectors/playlistSelector';

const useStyles = makeStyles(theme=>({
  root:{
    overflowY: "scroll",
  },
  backgroundLight:{
    backgroundColor: "#CDE7BE"
  },
  backgroundDark:{
    backgroundColor: "#bae8a0"
  }
}))

const SongsOfPlaylist = ()=>{
  const classes = useStyles();
  const dispatch = useDispatch();
  const playlist = useSelector(songsSelector)

  const handleSongSelect = (id) =>{
    dispatch(setSelectedSong(id));
  }

  if(!playlist)
  {
    return <>Select a playlist to load songs</>
  }

  if(playlist.length === 0)
  {
    return <>The list is empty, add some tracks</>
  }

  return <>
    <List className={classes.root}>
      {playlist.map((x, idx) => {
        return (
          <ListItem key={x.songId} button className={idx %2 ===0 ? classes.backgroundDark : classes.backgroundLight}>
            <ListItemText primary={`${x.songTitle}`} onClick={() => handleSongSelect(x.songId)}/>
          </ListItem>
        )
      })}
      
    </List>
  </>
}

export default SongsOfPlaylist;