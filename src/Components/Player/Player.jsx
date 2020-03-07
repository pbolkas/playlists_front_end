import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import Play from './Play';
import Pause from './Pause';
import Previous from './Previous';
import Next from './Next';
import SongInfo from './SongInfo';

const Player = ()=>{
  const [playing,setPlaying] = useState(false);
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
      {playing ? <Pause/> : <Play/>}
    </Grid>
    <Grid item xs={4}>
      <Next/>
    </Grid>
  </Grid>
  </>
}
export default Player;