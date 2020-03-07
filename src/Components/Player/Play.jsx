import React from 'react'
import { Button } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
const Play = ()=>{
  return <>
  <Button fullWidth variant="contained" color="secondary" disableElevation>
    <PlayArrowIcon/>
  </Button>
  </>
}

export default Play;