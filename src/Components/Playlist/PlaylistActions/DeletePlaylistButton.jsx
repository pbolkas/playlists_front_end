import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import FormDialog from '../../Common/FormDialog';
import { useDispatch } from 'react-redux';
import { removePlaylistRequestedAction } from '../../../Actions';

const DeletePlaylistButton = ({ id }) => {

  const dispatch = useDispatch();

  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const handleRemovePlaylist = () =>{
    setOpenConfirmDialog(true);
  }

  const handleCancel = () => {
    setOpenConfirmDialog(false);
  }

  const handleAccept = () => {
    setOpenConfirmDialog(false);
    dispatch(removePlaylistRequestedAction(id));
  }

  return <>
    <IconButton onClick = {handleRemovePlaylist}>
      <DeleteIcon />
    </IconButton>
    <FormDialog title = "Info" open={openConfirmDialog} fnReject = {handleCancel} fnAccept = {handleAccept} text="Are you sure you want to remove this playlist?"/>
  </>
}
export default DeletePlaylistButton;