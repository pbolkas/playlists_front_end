import React from 'react'
import { Button } from '@material-ui/core';

const Song = ({id,title})=>{
  return <>
  <Button id={id} variant="contained" color="secondary">
    {title}
  </Button>
  </>
}

export default Song;