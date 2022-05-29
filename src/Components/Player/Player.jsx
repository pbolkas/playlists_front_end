import React, { useEffect, useState } from 'react'
import { LinearProgress, Grid } from '@material-ui/core'
import SongInfo from './SongInfo';
import { useSelector, useDispatch } from 'react-redux';
import { playerIsPlayingSelector } from '../../Selectors/playerSelector';
import { setDurationAction, pauseAction } from '../../Actions';
import { songIsLoadingSelector } from '../../Selectors/playlistSelector';
import PlayerControls from './PlayerControls';
import { addSongEndedListener, pauseAudio, playAudio } from '../Audio/AudioPlayer';


const Player = () => {

  const dispatch = useDispatch();
  const songIsLoading = useSelector(songIsLoadingSelector);
  // TODO: use this to implement progress bar dispatch(setDurationAction(selectedSong === null ? 0 :audio.duration));
  const songIsPlaying = useSelector(playerIsPlayingSelector);
  const [enableAutoplay, setEnableAutoplay] = useState(false);

  const isAutoplayEnabled = () =>{
    return enableAutoplay;
  }

  addSongEndedListener((evt) => handleTrackEndedEvent());

  const handleTrackEndedEvent = () => {
    trackEnded();

    if(isAutoplayEnabled())
      nextTrack();
  }

  const trackEnded = () => {
    dispatch(pauseAction());
  }

  const nextTrack = () => {
    // TODO
  }
  
  useEffect(() => {

    if (songIsPlaying) {
      playAudio();
    } else {
      pauseAudio();
    }

    return () => {
      pauseAudio();
    };
  }, [songIsPlaying, dispatch])

  return <>
    <Grid container>
      <Grid item xs={12}>
        {songIsLoading && <LinearProgress />}
        {!songIsLoading && <SongInfo />}
      </Grid>
      <Grid item xs={12}>
        <PlayerControls songIsPlaying={songIsPlaying}/>
      </Grid>
    </Grid>
  </>
}
export default Player;