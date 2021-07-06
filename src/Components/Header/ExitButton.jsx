import React from 'react'
import { IconButton } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import { UserLogoutRequestAction } from '../../Actions/UserActions';
import { clearPlayerAction } from '../../Actions/PlayerActions';
import { clearPlaylistAction } from '../../Actions/PlaylistActions';

const ExitButton = () =>{
  const dispatch = useDispatch();
  
  const logOut = () => {
    dispatch(clearPlayerAction());
    dispatch(clearPlaylistAction());
    dispatch(UserLogoutRequestAction());
  }

  return <IconButton variant="contained" onClick={logOut}>
    <ExitToAppIcon />
  </IconButton>
  
}
export default ExitButton;