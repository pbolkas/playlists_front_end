import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, useDispatch } from 'react-redux';
import { playlistAlertSelector } from '../../Selectors/playlistSelector';
import { clearAlertErrorAction } from '../../Actions';

const Alert = ({ open = false, message = "Alert", clearAlert }) => {

  const dispatch = useDispatch();

  const displayAlert = useSelector(playlistAlertSelector);
  
  const handleClose = () => {
    dispatch(clearAlertErrorAction())
  }

  return <>
    <Snackbar
      open={displayAlert ? true : false}
      message={displayAlert}
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