import React, { useState, useEffect } from 'react'
import { makeStyles, LinearProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { durationSelector, playerIsPlayingSelector } from '../../Selectors/playerSelector';
import { pauseAction } from '../../Actions';
const useStyles = makeStyles(theme=>({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))
const SongProgress = ()=>{

  const classes = useStyles();
  const dispatch = useDispatch();

  const [completed, setCompleted] = useState(0);

  const songDuration = useSelector(durationSelector);
  const songPlaying = useSelector(playerIsPlayingSelector);
  
  useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          dispatch(pauseAction());
          return 0;
        }
        
        const diff = 10/songDuration;
        return Math.min(oldCompleted + (songPlaying? diff : 0), 100);
      });
    }

    const timer = setInterval(progress, songPlaying? 100:null);
    return () => {
      clearInterval(timer);
    };
  }, [songDuration,songPlaying,dispatch]);

  return <>
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={completed} />
    </div>
  </>
}

export default SongProgress;