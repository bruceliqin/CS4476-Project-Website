import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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

const Proposal = ({ tagChange }) => {
    const classes = useStyles();
    const theme = useTheme();



    return (
        <div className={classes.wrapper}>
            <Typography>
                Proposal
            </Typography>
        </div>
    )
}

export default Proposal;