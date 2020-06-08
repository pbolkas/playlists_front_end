import React from 'react'
import { IconButton } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import { UserLogoutRequestAction } from '../../Actions/UserActions';

const ExitButton = () =>{
  const dispatch = useDispatch();
  
  const logOut = () => {
    dispatch(UserLogoutRequestAction());
  }

  return <IconButton variant="contained" onClick={logOut}>
    <ExitToAppIcon />
  </IconButton>
  
}
export default ExitButton;