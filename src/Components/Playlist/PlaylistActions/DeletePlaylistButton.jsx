import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

const DeletePlaylistButton = ({ id }) => {
  return <>
    <IconButton>
      <DeleteIcon />
    </IconButton>
  </>
}
export default DeletePlaylistButton;