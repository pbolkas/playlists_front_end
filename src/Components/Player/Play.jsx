import React from 'react'
import { Button } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useDispatch } from 'react-redux';
import {playAction} from '../../Actions'
const Play = ()=>{
  
  const dispatch = useDispatch();

  const play=()=>{
    dispatch(playAction());
  }
  return <>
  <Button fullWidth variant="contained" color="secondary" disableElevation onClick={play}>
    <PlayArrowIcon/>
  </Button>
  </>
}

export default Play;