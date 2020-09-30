import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Header } from '../../components';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection:'column',
        paddingTop:'10%'
    },
    link: {
        textDecoration: 'none',
        color: '#000',
    },
}));

const ProjectVideo = ({ tagChange }) => {
    const classes = useStyles();
    const theme = useTheme();



    return (
        <div className={classes.wrapper}>
            <Header></Header>
            <Typography>
                In progress
            </Typography>
        </div>
    )
}

export default ProjectVideo;