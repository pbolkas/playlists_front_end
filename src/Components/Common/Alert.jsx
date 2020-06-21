import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Alert = ({ open = false, message = "Alert", clearAlert = () =>{ } }) => {

  // const [openSnackbar,setOpenSnackbar] = useState(open);
  
  const handleClose = () => {
    clearAlert();
  }

  return <>
    <Snackbar
      open={open}
      message={message}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      action={
        <>
          <IconButton
            onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </>
      }
    />
  </>
}

export default Alert;