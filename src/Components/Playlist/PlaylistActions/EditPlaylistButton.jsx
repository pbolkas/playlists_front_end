import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import AddPlaylistDialog from '../AddPlaylist/AddPlaylistDialog';
import { useDispatch, useSelector } from 'react-redux';
import { editPlaylistNameRequest, haveEditErrorClearAction } from '../../../Actions/PlaylistActions';
import Alert from '../../Common/Alert';
import { playlistEditErrorSelector } from '../../../Selectors/playlistSelector';


const EditPlaylistButton = ({ title, id }) => {

  const dispatch = useDispatch();

  const [openEditPlaylistDialog, setOpenEditPlaylistDialog] = useState(false);
  const haveEditError = useSelector(playlistEditErrorSelector);

  const handleEditPlaylist = () => {
    setOpenEditPlaylistDialog(true);
  }

  const editPlaylistTitle = (newTitle) => {
    dispatch(editPlaylistNameRequest(newTitle, id));
    setOpenEditPlaylistDialog(false);
  }

  const handleRejectEditPlaylist = () => {
    setOpenEditPlaylistDialog(false);
  }

  const clearHaveEditError = () => {
    dispatch(haveEditErrorClearAction());
  }

  return <>
    <AddPlaylistDialog dialogTitle={"Edit playlist title"} open={openEditPlaylistDialog} onReject={handleRejectEditPlaylist} defaultTitle={title} onAccept={editPlaylistTitle} />
    <IconButton onClick={handleEditPlaylist}>
      <EditIcon />
    </IconButton>
    <Alert open={haveEditError ? true : false} message={haveEditError ? haveEditError : undefined} clearAlert={clearHaveEditError} />
  </>
}

export default EditPlaylistButton;