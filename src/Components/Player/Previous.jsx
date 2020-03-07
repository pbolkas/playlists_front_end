import React from 'react'
import { Button } from '@material-ui/core'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
const Previous = ()=>{
  return <>
  <Button fullWidth variant="contained" color="secondary" disableElevation>
    <SkipPreviousIcon/>
  </Button>
  </>
}

export default Previous;