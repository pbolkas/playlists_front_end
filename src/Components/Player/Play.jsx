import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
const Play = ()=>{
  
  const audio = new Audio("http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3");
  
  const play=()=>{
    
    // this is a sample to play music using js
    audio.volume = 1;
    audio.play(); 
    
  }
  return <>
  <Button fullWidth variant="contained" color="secondary" disableElevation onClick={play}>
    <PlayArrowIcon/>
  </Button>
  </>
}

export default Play;