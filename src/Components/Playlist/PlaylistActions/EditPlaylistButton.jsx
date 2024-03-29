import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import AddPlaylistDialog from '../AddPlaylist/AddPlaylistDialog';
import { useDispatch } from 'react-redux';
import { editPlaylistNameRequestAction } from '../../../Actions/PlaylistActions';


const EditPlaylistButton = ({ title, id }) => {

  const dispatch = useDispatch();

  const [openEditPlaylistDialog, setOpenEditPlaylistDialog] = useState(false);

  const handleEditPlaylist = () => {
    setOpenEditPlaylistDialog(true);
  }

  const editPlaylistTitle = (newTitle) => {
    dispatch(editPlaylistNameRequestAction(newTitle, id));
    setOpenEditPlaylistDialog(false);
  }

  const handleRejectEditPlaylist = () => {
    setOpenEditPlaylistDialog(false);
  }

  return <>
    <AddPlaylistDialog dialogTitle={"Edit playlist title"} open={openEditPlaylistDialog} onReject={handleRejectEditPlaylist} defaultTitle={title} onAccept={editPlaylistTitle} />
    <IconButton onClick={handleEditPlaylist}>
      <EditIcon />
    </IconButton>
  </>
}

export default EditPlaylistButton;