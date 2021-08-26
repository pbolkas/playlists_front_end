import React from 'react';
import { Grid } from '@material-ui/core';
import Play from './Play';
import Pause from './Pause';
import Previous from './Previous';
import Next from './Next';

const PlayerControls = ({songIsPlaying}) => {
  return <Grid container
    direction="row"
  >
    <Grid item xs={4}>
      <Previous />
    </Grid>
    <Grid item xs={4}>
      {songIsPlaying ? <Pause /> : <Play />}
    </Grid>
    <Grid item xs={4}>
      <Next />
    </Grid>
  </Grid>
}

export default PlayerControls;