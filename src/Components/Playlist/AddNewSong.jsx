import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
const useStyles = makeStyles(theme=>({
  root:{
    // marginTop: theme.spacing(2),
  }
}))
 const AddNewSong = ()=>{
   const classes = useStyles();

   const handleAddNewSong =()=>{
     console.log("Add new song (open a dialog window)")
   }
   return <Button className={classes.root} fullWidth variant="contained" color="secondary" onClick={handleAddNewSong}>
     Add new song
   </Button>
 }

 export default AddNewSong;