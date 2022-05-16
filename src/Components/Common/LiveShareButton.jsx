import React from 'react';
import { Fab, makeStyles } from '@material-ui/core'
import ShareIcon from '@material-ui/icons/Share';
import StopIcon from '@material-ui/icons/Stop';
import { useDispatch, useSelector } from 'react-redux';
import { liveShareEnableSelector } from '../../Selectors/liveShareSelector';
import { liveShareEnableRequestAction, liveShareDisableRequestAction } from '../../Actions/LiveShareActions';

const useStyles = makeStyles(theme => ({
  broadcast:{
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
  liveSharingButtonPulse:{

  }
}))

const LiveShareButton = () => {

  const classes = useStyles();
  const liveShareEnabled = useSelector(liveShareEnableSelector);
  const dispatch = useDispatch();

  const isLiveShareEnabled = () =>{
    return liveShareEnabled;
  }

  const toggleLiveSharing = () => {
    if (isLiveShareEnabled()) {
      stopLiveSharing();
    }
    else {
      startLiveSharing();
    }
  }

  const startLiveSharing = () => {
    dispatch(liveShareEnableRequestAction());
  }

  const stopLiveSharing = () => {
    dispatch(liveShareDisableRequestAction());
  }

  return <>
    <Fab className={classes.broadcast} color ="primary" onClick={toggleLiveSharing}>
      {liveShareEnabled ? <StopIcon /> : <ShareIcon/> }
    </Fab>
  </>
}

export default LiveShareButton;