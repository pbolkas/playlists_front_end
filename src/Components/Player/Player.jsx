import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Play from './Play';
import Pause from './Pause';
import Previous from './Previous';
import Next from './Next';
import SongInfo from './SongInfo';
import { useSelector, useDispatch } from 'react-redux';
import {playerIsPlayingSelector } from '../../Selectors/playerSelector';
import { setDurationAction, pauseAction } from '../../Actions';

const Player = ()=>{
  const dispatch = useDispatch();
  const [audio] = useState(new Audio("https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"));
  dispatch(setDurationAction(audio.duration));
  
  const songIsPlaying = useSelector(playerIsPlayingSelector);

  useEffect(() => {
    
    if(songIsPlaying){
      audio.play();
    }
    else{
      audio.pause();
    }

    console.log(`elapsed time -> ${audio.currentTime} out of ${audio.duration}`)

    return () => {
      audio.pause();
    };
  }, [songIsPlaying,audio,dispatch])

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