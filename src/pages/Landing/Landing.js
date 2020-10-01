import React from 'react';

import { Typography, Box } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Header, TeamDescription } from '../../components';
import { Link } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import mainFig from "../../img/digits.png";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection:'column',
        paddingTop:'20px',
    },
    link: {
        textDecoration: 'none',
        color: '#000',
    },
    titleFormat: {
        paddingBottom:'10px',
        textDecoration: "none",
        color:'#212F3C',
        //fontFamily: '-apple-system',
    },
    titleParagraphFormat: {
        fontFamily: '-apple-system',
        paddingTop:'20px',
    },
    imageFormat: {
        //paddingBottom:'10px',
    },
    boxFormat: {
        width: '80%',
        paddingBottom:'30px',
    }
}));

const Landing = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.wrapper}>
            <Header></Header>
            <Box className={classes.boxFormat}>
                <Typography align='center' variant='h3' className={classes.titleFormat}>
                    SVHN Digit Detector
                </Typography>
                <Typography align='center' variant='subtitle1' className={classes.titleParagraphFormat}>
                Detecting and recognizing text in natural scene images and optical character recognition is a challenging task computer scientists have been working on and improving for a long time. We want to work with the Street View House Number (SVHN) dataset to create a digit detector program.
                With the given input of an image taken from a camera or extracted from Google street view, our detector will extract the house numbers and display the predicted output based on the trained model.
                </Typography>
            </Box>
            <img className={classes.imageFormat} src={mainFig} alt="..."></img>
            <TeamDescription></TeamDescription>
        </div>
    )
}

export default Landing;