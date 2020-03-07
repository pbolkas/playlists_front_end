import React from 'react'
import { Button } from '@material-ui/core'
import PauseIcon from '@material-ui/icons/Pause';

const Pause = ( )=>{
  return<>
  <Button fullWidth variant="contained" color="secondary" disableElevation>
    <PauseIcon/>
  </Button>
  </>
}

export default Pause;