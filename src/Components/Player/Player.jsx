import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Play from './Play';
import Pause from './Pause';
import Previous from './Previous';
import Next from './Next';
import SongInfo from './SongInfo';
import { useSelector, useDispatch } from 'react-redux';
import {playerIsPlayingSelector } from '../../Selectors/playerSelector';
import { setDurationAction } from '../../Actions';
import { selectedSongSelector } from '../../Selectors/playlistSelector';

const Player = ()=>{
  const dispatch = useDispatch();
  const selectedSong = useSelector(selectedSongSelector);
  const audio = new Audio (selectedSong === null ? "" : selectedSong.url);
  dispatch(setDurationAction(selectedSong === null ? 0 :audio.duration));
  const songIsPlaying = useSelector(playerIsPlayingSelector);
  
  useEffect(() => {
    
    if(songIsPlaying){
      audio.play();
    }
    else{
      audio.pause();
    }

    // console.log(`elapsed time -> ${audio.currentTime} out of ${audio.duration}`)

    return () => {
      audio.pause();
    };
  }, [songIsPlaying,audio,dispatch])

  return<>
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