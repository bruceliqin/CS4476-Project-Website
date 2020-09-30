import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Header, TeamDescription } from '../../components';
import { Link } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import mainFig from "../../img/mainfig.png";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection:'column',
        paddingTop:'10%',
    },
    link: {
        textDecoration: 'none',
        color: '#000',
    },
    titleFormat: {
        padding:'20px',
    },
}));

const Landing = () => {
    const classes = useStyles();
    const theme = useTheme();



    return (
        <div className={classes.wrapper}>
            <img src={mainFig} alt="..."></img>
            <Typography className={classes.titleFormat}>
                Project Description
            </Typography>
            <Header></Header>
            <TeamDescription></TeamDescription>
        </div>
    )
}

export default Landing;