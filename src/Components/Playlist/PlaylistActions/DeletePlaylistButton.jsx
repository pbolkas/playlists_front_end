import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

const DeletePlaylistButton = ({ id }) => {

  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const handleAcceptRemoval = () => {
    // dispatch an action to remove the playlist
  }

  const handleRemovePlaylist = () =>{
    // aks user if he is sure
    
  }

  return <>
    <IconButton onClick = {handleRemovePlaylist}>
      <DeleteIcon />
    </IconButton>
  </>
}
export default DeletePlaylistButton;