import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core'

const AddPlaylistDialog = ({ dialogTitle = "Title",
  context = "Please fill the title",
  open,
  onReject = () => {
    //  foo
  },
  onAccept = (title) => {
    // foo
  },
  defaultTitle = ""
}) => {

  const [title, setTitle] = useState(defaultTitle);

  return <>
    <Dialog open={open} fullWidth>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {context}
        </DialogContentText>
        <TextField
          autoFocus
          fullWidth
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
        <DialogActions>
          <Button onClick={onReject}>
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

export default AddPlaylistDialog;