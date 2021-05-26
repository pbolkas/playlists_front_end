import React from 'react'
import { Button } from '@material-ui/core'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSong } from '../../Actions';
import { previousSongSelector } from '../../Selectors/playlistSelector';

const Previous = () =>{

  const dispatch = useDispatch();
  const previous = useSelector(previousSongSelector)

  const selectPreviousSong = () =>{
    dispatch(setSelectedSong(previous.songId, previous.songTitle));
  }

  return <>
  <Button fullWidth disabled={previous === null} onClick={selectPreviousSong} variant="contained" color="secondary" disableElevation>
    <SkipPreviousIcon/>
  </Button>
  </>
}

export default Previous;