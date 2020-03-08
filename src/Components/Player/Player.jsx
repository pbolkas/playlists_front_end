import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Play from './Play';
import Pause from './Pause';
import Previous from './Previous';
import Next from './Next';
import SongInfo from './SongInfo';
import { useSelector } from 'react-redux';
import {playerIsPlayingSelector } from '../../Selectors/playerSelector';

const Player = ()=>{
  const [audio] = useState(new Audio("http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"));
  
  const songIsPlaying = useSelector(playerIsPlayingSelector);

  useEffect(() => {
    if(songIsPlaying){
      audio.play();
    }
    else{
      audio.pause();
    }
    return () => {
      audio.pause();
    };
  }, [songIsPlaying,audio])

  return<>
  here display song info e.g. remaining time, title, volume etc
  <SongInfo/>
  <Grid container
  direction= "row"
  >
    <Grid item xs={4}>
      <Previous/>
    </Grid>
    <Grid item xs={4}>
      {songIsPlaying ? <Pause/> : <Play/>}
    </Grid>
    <Grid item xs={4}>
      <Next/>
    </Grid>
  </Grid>
  </>
}
export default Player;