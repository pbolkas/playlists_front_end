import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, TextField } from '@material-ui/core';


const AddSongDialog = ({open, dialogTitle, fnAccept = () => {}, fnReject = () => {} }) =>{

  const [title, setTitle] = useState("");

  const onAccept = (title) =>{

  }


  return <>
    <Dialog open={open} fullWidth>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          onChange={(evt) => setTitle(evt.target.value)}
        />
        <Button varint="contained">
          <input type="file"  id="songFile"
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