import React from 'react';
import { Fab, makeStyles } from '@material-ui/core'
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(theme => ({
  broadcast:{
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
}))

const LiveShareButton = () => {

  const classes = useStyles();

  return <>
    <Fab className={classes.broadcast} color ="primary" >
      <ShareIcon />
    </Fab>
  </>
}

export default LiveShareButton;