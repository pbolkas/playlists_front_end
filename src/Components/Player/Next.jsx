import React from 'react'
import { Button } from '@material-ui/core'
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useDispatch } from 'react-redux';

const Next = () =>{
  
  const dispatch = useDispatch();

  const selectNextSong = () =>{
    
  }

  return<>
  <Button fullWidth onClick={selectNextSong} variant="contained" color="secondary" disableElevation>
    <SkipNextIcon/>
  </Button>
  </>
}

export default Next;