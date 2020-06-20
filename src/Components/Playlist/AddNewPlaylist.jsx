import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import AddPlaylistDialog from './AddPlaylist/AddPlaylistDialog';
import { useDispatch } from 'react-redux';
import { addPlaylistRequestAction } from '../../Actions/PlaylistActions';

const AddNewPlaylist = () => {
  
  const dispatch = useDispatch();
  
  const [openForm, setOpenForm] = useState(false);

  const handleClickAddPlaylist = ()=>{
    setOpenForm(!openForm);
  }
  
  const handleSubmitNewPlaylist = (title) =>{

    handleClickAddPlaylist();
    dispatch(addPlaylistRequestAction(title));

  }

  return<>
  <AddPlaylistDialog open={openForm} onReject={handleClickAddPlaylist} onAccept={handleSubmitNewPlaylist} context={"Please fill the playlist's title below"} dialogTitle="Add new playlist"/>
  <Button variant="contained" fullWidth color="primary" onClick={handleClickAddPlaylist}>
    Add new playlist
  </Button>
  </>
}

export default AddNewPlaylist;