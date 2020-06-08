import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import ExitButton from '../Header/ExitButton';
import { useSelector } from 'react-redux';
import { userLoggedInSelector } from '../../Selectors/userSelector';
const useStyles= makeStyles(theme=> ({
  grow:{
    flexGrow: 1,
  },
  appBar:{
    padding: theme.spacing(2),
  },
  title:{
    flexGrow: 1
  }
}))

const Header = () =>{
  const classes = useStyles();
  const userIsLoggedIn = useSelector(userLoggedInSelector);
  
  return <div className={classes.grow}>
    <AppBar position='static'>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Playlists
        </Typography>
        {userIsLoggedIn && <ExitButton />}
      </Toolbar>
    </AppBar>
  </div>
}

export default Header;