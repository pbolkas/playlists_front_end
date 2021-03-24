import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addSongRequestAction } from '../../../Actions/SongActions';


const AddSongDialog = ({open, dialogTitle, fnAccept = () => {}, fnReject = () => {} }) =>{

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [songBytes, setSongBytes] = useState();

  const onAccept = (title) =>{
    dispatch(addSongRequestAction(title, "5d73866f-e6a8-4b8b-96f2-c61a2ecffe5e", songBytes));
  }


  const loadSong = (evt) =>{
    
    let song = evt.target.files[0];
    
    setTitle(song.name);

    let reader = new FileReader();

    reader.onloadend = (evt) => {
      if (evt.target.readyState === FileReader.DONE) {

        const blob = new Blob([evt.target.result], {type: 'audio/mpga'});

        setSongBytes(blob);
        
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
        <Button varint="contained">
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