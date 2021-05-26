import React from 'react'
import { Button } from '@material-ui/core'
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSong } from '../../Actions';
import { nextSongSelector } from '../../Selectors/playlistSelector';

const Next = () =>{
  
  const dispatch = useDispatch();
  const next = useSelector(nextSongSelector)

  const selectNextSong = () =>{
    dispatch(setSelectedSong(next.songId, next.songTitle));
  }

  return<>
  <Button fullWidth disabled={next === null} onClick={selectNextSong} variant="contained" color="secondary" disableElevation >
    <SkipNextIcon />
  </Button>
  </>
}

export default Next;