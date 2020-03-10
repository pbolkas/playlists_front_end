import React, { useState } from 'react'
import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import color from '@material-ui/core/colors/amber';

const useStyles = makeStyles(theme=>({
  root:{
    overflowY: "scroll",
    height: 200
  },
  backgroundLight:{
    backgroundColor: "#CDE7BE"
  },
  backgroundDark:{
    backgroundColor: "#bae8a0"
  }
}))

const songs ={
  "songs":[
    {
      "id":1,
      "Title":"Malaguena",
      "LengthInSeconds":60,
      "url":"https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
    },
    {
      "id":2,
      "Title":"Entre dos aguas",
      "LengthInSeconds":55,
      "url":"https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_1MG.mp3"
    },
    {
      "id":3,
      "Title":"Ride of the valkyries",
      "LengthInSeconds":45,
      "url":"https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_2MG.mp3"
    },
    {
      "id":4,
      "Title":"The mexican hat dance",
      "LengthInSeconds":35,
      "url":"https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_5MG.mp3"
    }
  ]
}

const SongsOfPlaylist = ()=>{
  const classes = useStyles();
  const [playlist,setPlaylist] = useState(songs.songs);
  const handleSongSelect = (id,url) =>{
    console.log(id);
    console.log(url);
  }
  return <>
    <List className={classes.root}>
      {playlist.map((x,idx) => {
        return (
          <ListItem key={x.id} button className={idx %2 ===0 ? classes.backgroundDark : classes.backgroundLight}>
            <ListItemText primary={`${x.Title}`} onClick={()=>handleSongSelect(x.id,x.url)}/>
          </ListItem>
        )
      })}
      
    </List>
  </>
}

export default SongsOfPlaylist;