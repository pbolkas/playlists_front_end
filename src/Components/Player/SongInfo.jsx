import React from 'react'
import SongProgress from './SongProgress';
import { Chip, makeStyles } from '@material-ui/core';
import { selectedSongSelector } from '../../Selectors/playlistSelector';
import { useSelector } from 'react-redux';


const useStyles = makeStyles(theme=>({
  root:{
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  chipsSpacing:{
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }

}))

const SongInfo = ()=>{
  const classes = useStyles();
  const selectedSong = useSelector(selectedSongSelector);

  const handleDelete =()=>{
    console.log(`deleting ${selectedSong.id}`)
  }

  const showSongDetails =()=>{
    return <div className={classes.root}>
      <Chip label={"Title : "+selectedSong.songTitle} className = {classes.chipsSpacing}/>
      {/* <Chip label={"Duration : "+selectedSong.LengthInSeconds} className = {classes.chipsSpacing}/> */}
      <Chip label="Delete" onDelete={handleDelete} className = {classes.chipsSpacing}/>
    </div>
  }
  
  return <>
  {!selectedSong && "You need to select a song first"}
  {selectedSong && showSongDetails()}
  

  {/* TODO: fix it <SongProgress/> */}
  </>
}

export default SongInfo;