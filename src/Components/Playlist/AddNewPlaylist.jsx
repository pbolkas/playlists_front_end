import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import AddPlaylistDialog from './AddPlaylist/AddPlaylistDialog';
import { useDispatch, useSelector } from 'react-redux';
import { addPlaylistRequestAction, haveAddErrorClearAction } from '../../Actions/PlaylistActions';
import { playlistAddErrorSelector } from '../../Selectors/playlistSelector';
import Alert from '../Common/Alert';

const AddNewPlaylist = () => {

  const dispatch = useDispatch();

  const [openForm, setOpenForm] = useState(false);
  const haveAddError = useSelector(playlistAddErrorSelector);

  const handleClickAddPlaylist = () => {
    setOpenForm(!openForm);
  }

  const handleSubmitNewPlaylist = (title) => {

    handleClickAddPlaylist();
    dispatch(addPlaylistRequestAction(title));

  }

  const clearHaveAddError = () => {
    dispatch(haveAddErrorClearAction());    
  }

  return <>
    <AddPlaylistDialog open={openForm} onReject={handleClickAddPlaylist} onAccept={handleSubmitNewPlaylist} context={"Please fill the playlist's title below"} dialogTitle="Add new playlist" />
    <Button variant="contained" fullWidth color="primary" onClick={handleClickAddPlaylist}>
      Add new playlist
    </Button>
    <Alert open = {haveAddError ? true: false} message={haveAddError? haveAddError : undefined} clearAlert = {clearHaveAddError}/>
  </>
}

export default AddNewPlaylist;