import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme=>({
  page:{
    padding:theme.spacing(2),
  }
}))
const PlaylistsPage = ()=>{
  const classes = useStyles();
  return<>
    <Typography variant="h4" gutterBottom component="h2">
      Playlist App
    </Typography>
  </>
}

export default PlaylistsPage;