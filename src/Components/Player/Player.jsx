import React, { useEffect } from 'react'
import { LinearProgress, Grid } from '@material-ui/core'
import SongInfo from './SongInfo';
import { useSelector, useDispatch } from 'react-redux';
import { playerIsPlayingSelector } from '../../Selectors/playerSelector';
import { setDurationAction } from '../../Actions';
import { selectedSongSelector, songIsLoadingSelector } from '../../Selectors/playlistSelector';
import PlayerControls from './PlayerControls';


const Player = () => {
  const dispatch = useDispatch();
  const selectedSong = useSelector(selectedSongSelector);
  const songIsLoading = useSelector(songIsLoadingSelector);

  const audio = new Audio(selectedSong === null ? "" : selectedSong.link);
  // dispatch(setDurationAction(selectedSong === null ? 0 :audio.duration));
  const songIsPlaying = useSelector(playerIsPlayingSelector);

  useEffect(() => {

    if (songIsPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    // console.log(`elapsed time -> ${audio.currentTime} out of ${audio.duration}`)

    return () => {
      audio.pause();
    };
  }, [songIsPlaying, audio, dispatch])

  return <>
    <Grid container>
      <Grid item xs={12}>
        {songIsLoading && <LinearProgress />}
        {!songIsLoading && <SongInfo />}
      </Grid>
      <Grid item xs={12}>
        <PlayerControls />
      </Grid>
    </Grid>
  </>
}
export default Player;