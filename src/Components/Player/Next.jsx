import React from 'react'
import { Button } from '@material-ui/core'
import SkipNextIcon from '@material-ui/icons/SkipNext';

const Next = ()=>{
  return<>
  <Button fullWidth variant="contained" color="secondary" disableElevation>
    <SkipNextIcon/>
  </Button>
  </>
}

export default Next;