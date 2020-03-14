import React from 'react'
import { Button } from '@material-ui/core'
import PauseIcon from '@material-ui/icons/Pause';
import { useDispatch } from 'react-redux';
import { pauseAction } from '../../Actions';

const Pause = ( )=>{
  
  const dispatch = useDispatch();

  const pause = ()=>{
    dispatch(pauseAction());
  }
  return<>
  <Button fullWidth variant="contained" color="secondary" disableElevation onClick={pause}>
    <PauseIcon/>
  </Button>
  </>
}

export default Pause;