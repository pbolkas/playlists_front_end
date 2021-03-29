import React from 'react'
import { Button } from '@material-ui/core'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { useDispatch } from 'react-redux';

const Previous = () =>{

  const dispatch = useDispatch();

  const selectPreviousSong = () =>{

  }

  return <>
  <Button fullWidth onClick={selectPreviousSong} variant="contained" color="secondary" disableElevation>
    <SkipPreviousIcon/>
  </Button>
  </>
}

export default Previous;