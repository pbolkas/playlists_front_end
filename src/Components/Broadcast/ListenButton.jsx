import { Button } from '@material-ui/core';
import React from 'react';

const ListenButton = ({startListeningHandle}) => {

  return <>
  <Button fullWidth variant="contained" color="secondary" onClick={startListeningHandle}>
    Listen
  </Button>
  </>
}

export default ListenButton;