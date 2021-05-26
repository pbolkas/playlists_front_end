import React, { useState } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import AddSongDialog from './AddSong/AddSongDialog';

const useStyles = makeStyles(theme => ({
  root: {
    // marginTop: theme.spacing(2),
  }
}))
const AddNewSong = () => {
  const classes = useStyles();

  const [openForm, setOpenForm] = useState(false);

  const handleAddNewSong = () => {
    setOpenForm(!openForm);
  }

  const setCloseForm = () => {
    setOpenForm(false);
  }

  const handleRejectAddSong = () => {

    setOpenForm(false);
  }

  return <>
    <Button className={classes.root} fullWidth variant="contained" color="secondary" onClick={handleAddNewSong}>
      Add new song
    </Button>
    <AddSongDialog open={openForm} dialogTitle="Add new song" fnAccept={setCloseForm} fnReject={handleRejectAddSong} />
  </>
}

export default AddNewSong;