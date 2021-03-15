import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, TextField } from '@material-ui/core';


const AddSongDialog = ({open, dialogTitle, fnAccept = () => {}, fnReject = () => {} }) =>{

  const [title, setTitle] = useState("");
  let songBytes;

  const onAccept = (title) =>{
    console.log(title)
  }


  const loadSong = (evt) =>{
    
    let song = evt.target.files[0];
    
    setTitle(song.name);

    let reader = new FileReader();

    reader.onloadend = (evt) => {
      if (evt.target.readyState === FileReader.DONE) { 
        
        songBytes = evt.target.result;
        
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
          value={title }
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