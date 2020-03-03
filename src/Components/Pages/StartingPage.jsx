import React from 'react'
import Header from '../Common/Header';
import { Route } from 'react-router-dom';
import PlaylistsPage from './PlaylistsPage';
import { makeStyles } from '@material-ui/core';

const useStyles = theme => makeStyles({
    root:{
        display: 'flex'
    },
})

const StartingPage = ({match}) =>{
    const classes = useStyles();

    return <>
    <Header />

    <main>  
        <Route exact path= {match.path} component={PlaylistsPage}/>
    </main>
    </>
}
export default StartingPage;
