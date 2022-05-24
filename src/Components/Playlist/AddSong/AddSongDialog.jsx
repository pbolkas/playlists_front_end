import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addSongRequestAction } from '../../../Actions/SongActions';
import { selectedPlaylistSelector } from '../../../Selectors/playlistSelector';


const AddSongDialog = ({open, dialogTitle, fnAccept = () => {}, fnReject = () => {} }) =>{

  const dispatch = useDispatch();
  const selectedPlaylist = useSelector(selectedPlaylistSelector);

  const [title, setTitle] = useState("");
  const [songBytes, setSongBytes] = useState();

  const onAccept = (title) =>{
    dispatch(addSongRequestAction(title, selectedPlaylist, songBytes));
    fnReject();
  }

  const loadSong = (evt) =>{
    
    let song = evt.target.files[0];
    
    setTitle(song.name);

    let reader = new FileReader();

    reader.onloadend = (evt) => {
      if (evt.target.readyState === FileReader.DONE) {

        setSongBytes(song);
        
      }
    };

    reader.readAsBinaryString(song);
  }


  return <>
    <Dialog open={open} fullWidth>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
        <Button variant="contained">
          <input type="file" id="songFile" multiple onChange={(evt) => loadSong(evt) }
          />
        </Button>
        <DialogActions>
          <Button onClick={fnReject}>
            CANCEL
          </Button>
          <Button onClick={() => onAccept(title)}>
            SUBMIT
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
    
  </>
}

export default AddSongDialog;