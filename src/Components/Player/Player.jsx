import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import Play from './Play';
import Pause from './Pause';
import Previous from './Previous';
import Next from './Next';

const Player = ()=>{
  const [playing,setPlaying] = useState(false);
  return<>
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