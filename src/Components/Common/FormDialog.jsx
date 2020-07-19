import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

const FormDialog = ({title = "Message", text = "Are you sure?", open=false , fnAccept , fnReject })=>{
  
  return <Dialog open={open}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {text}
      </DialogContentText>
      <DialogActions>
        <Button onClick={fnReject}>CANCEL</Button>
        <Button onClick={fnAccept}>SUBMIT</Button>
      </DialogActions>
    </DialogContent>
  </Dialog>
}

export default FormDialog;