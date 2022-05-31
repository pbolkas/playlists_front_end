import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import ExitButton from '../Header/ExitButton';
import { useSelector } from 'react-redux';
import { userLoggedInSelector } from '../../Selectors/userSelector';
import PeerId from '../Header/PeerId';
import { getPeerId } from '../../Services/peerService';

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
  const peerId = getPeerId();

  return <div className={classes.grow}>
    <AppBar position='static'>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Playlists
        </Typography>
        {peerId && userIsLoggedIn && <PeerId PeerId={peerId} />}
        {userIsLoggedIn && <ExitButton />}
      </Toolbar>
    </AppBar>
  </div>
}

export default Header;