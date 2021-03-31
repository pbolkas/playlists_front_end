import React from 'react'
import { Button } from '@material-ui/core'
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useDispatch } from 'react-redux';
import { selectNextRequestAction } from '../../Actions';

const Next = () =>{
  
  const dispatch = useDispatch();

  const selectNextSong = () =>{
    // dispatch(selectNextRequestAction());
  }

  return<>
  <Button fullWidth onClick={selectNextSong} variant="contained" color="secondary" disableElevation >
    <SkipNextIcon />
  </Button>
  </>
}

export default Next;