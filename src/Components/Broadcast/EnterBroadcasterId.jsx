import { TextField } from '@material-ui/core';
import React from 'react';

const EnterBroadcasterId = ({broadcasterId, setBroadcasterId}) => {

  return <>
    <TextField 
    fullWidth 
    value={broadcasterId} 
    onChange={(evt) => setBroadcasterId(evt.target.value)} />
  </>
}

export default EnterBroadcasterId;