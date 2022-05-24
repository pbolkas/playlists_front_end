import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import EnterBroadcasterId from './EnterBroadcasterId';
import ListenButton from './ListenButton';
import { listenBroadcastRequest } from '../../Actions/LiveShareActions';

const useStyles = makeStyles(theme=>({
  paper:{
    padding: theme.spacing(2),
  }
}))

const ListenBroadCast = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [broadcasterId, setBroadcasterId] = useState('');

  const handleListen = () => {
    if(broadcasterId !== '')
      dispatch(listenBroadcastRequest(broadcasterId));
  }

  return <>
    <Paper className={classes.paper}>
      
      <Typography variant="h5">
        Listen Broadcast
      </Typography>

      <Grid container spacing ={2}>
        <Grid item xs={6}>
          <EnterBroadcasterId broadcasterId={broadcasterId} setBroadcasterId={setBroadcasterId} />
        </Grid>
        <Grid item xs={6}>
          <ListenButton startListeningHandle={handleListen} />
        </Grid>
      </Grid>
    </Paper>
  </>
}

export default ListenBroadCast;