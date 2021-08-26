import React from 'react'
import { Button } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useDispatch, useSelector } from 'react-redux';
import {playAction} from '../../Actions'
import { selectedSongSelector } from '../../Selectors/playlistSelector';
const Play = ()=>{
  
  const dispatch = useDispatch();
  const selectedSong = useSelector(selectedSongSelector);

  const play=()=>{
    dispatch(playAction());
  }
  return <>
  <Button fullWidth disabled={selectedSong === null} variant="contained" color="secondary" disableElevation onClick={play}>
    <PlayArrowIcon/>
  </Button>
  </>
}

export default Play;