import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

const FormDialog = ({title, text, open=false})=>{
  
  const handleClose = () =>{

  }

  return <Dialog open={open} onClose={handleClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {text}
      </DialogContentText>
      
      <DialogActions>
        <Button>CANCEL</Button>
        <Button>SUBMIT</Button>
      </DialogActions>
    </DialogContent>
  </Dialog>
}

export default FormDialog;