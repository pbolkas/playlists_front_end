import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, useDispatch } from 'react-redux';
import { playlistAlertSelector } from '../../Selectors/playlistSelector';
import { clearAlertErrorAction } from '../../Actions';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
  root: {
    
  }
}));

function AlertItem(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Alert = ({ open = false, message = "Alert", clearAlert }) => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const displayAlert = useSelector(playlistAlertSelector);

  const handleClose = () => {
    dispatch(clearAlertErrorAction())
  }

  return <>
    <Snackbar
      open={displayAlert ? true : false}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <AlertItem onClose={handleClose} severity={"error"} className={classes.root}>
        {displayAlert}
      </AlertItem>
    </Snackbar>
  </>
}

export default Alert;