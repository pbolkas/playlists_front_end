import React from 'react'
import SongProgress from './SongProgress';
import { Chip, makeStyles } from '@material-ui/core';
import { selectedPlaylistSelector, selectedSongSelector } from '../../Selectors/playlistSelector';
import { useDispatch, useSelector } from 'react-redux';
import { removeSongRequestAction } from '../../Actions';


const useStyles = makeStyles(theme=>({
  root:{
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  chipsSpacing:{
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }

}))

const SongInfo = ()=>{
  const classes = useStyles();
  const selectedSong = useSelector(selectedSongSelector);
  const selectedPlaylist = useSelector(selectedPlaylistSelector);
  const dispatch = useDispatch();

  const handleDelete =()=>{
    dispatch(removeSongRequestAction(selectedSong.id, selectedPlaylist));
  }

  const showSongDetails =()=>{
    return <div className={classes.root}>
      <Chip label={"Title : "+selectedSong.songTitle} className = {classes.chipsSpacing}/>
      {/* <Chip label={"Duration : "+selectedSong.LengthInSeconds} className = {classes.chipsSpacing}/> */}
      {/* need to replace the following line with a new component called delete song */}
      <Chip label="Delete" onDelete={handleDelete} className = {classes.chipsSpacing}/>
    </div>
  }
  
  return <>
  {!selectedSong && "You need to select a song first"}
  {selectedSong && showSongDetails()}
  

  {/* TODO: fix it <SongProgress/> */}
  </>
}

export default SongInfo;