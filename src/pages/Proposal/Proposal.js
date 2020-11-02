import React from 'react';

import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from '../../components';
//import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection:'column',
        paddingTop:'20px'
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
    lateTitleFormat: {
        paddingTop: '20px',
        paddingBottom:'10px',
        textDecoration: "none",
        color:'#212F3C',
        //fontFamily: '-apple-system',
    },
    titleParagraphFormat: {
        fontFamily: '-apple-system',
    },
    titleParagraphFormat2: {
        fontFamily: '-apple-system',
        padding:'15px',
    },
    boxFormat: {
        width: '70%',
        paddingBottom:'30px',
    },
}));

const Proposal = ({ tagChange }) => {
    const classes = useStyles();
    //const theme = useTheme();

    return (
        <div className={classes.wrapper}>
            <Header></Header>
            <Box className={classes.boxFormat}>
            <Typography align = 'center' variant = 'h4' className={classes.titleFormat}>
                Problem Statement
            </Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
            When someone uses our system, they are expected to input images of house numbers displayed on streets. These images should be taken from a camera, or extracted from Google street view, with random background and diverse colors, but have the house numbers locating in the middle. The desired output is the same image with detected house numbers labeled besides the actual house numbers. <br></br>
            </Typography>

            <Typography align='center' variant='h4' className={classes.lateTitleFormat}>
                Approach
            </Typography>
            <Typography align='left' variant='h5' className={classes.titleParagraphFormat}>Image Processing Techniques:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
            - Convert the input image into a grayscale image <br></br>
            - Adjust lighting into desired condition in the image <br></br>
            - Denoise from the image <br></br>
            - Use the canny edge detector to detect the edges <br></br>
            - Normalising intensity of data through mean subtraction <br></br>
            - Experiment with different types of contrast normalisation (global, local) <br></br> <br></br>
            </Typography>
            <Typography align='left' variant='h5' className={classes.titleParagraphFormat}> Scene Text Detection:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
            - The dataset comes in two different formats from SVHN: <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Images with character level bounding boxes <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - 32-by-32 images centered around single character <br></br>
            - For images that do not have a bounding box, use YOLO to find the text box with a single neural network to predict bounding boxes and label the bounding boxes  <br></br>
            - After the bounding boxes are determined, crop the image into individual digits. <br></br>
            - Use findCountours() function in OpenCV library to detect separate portion of the image with continuous pixels of the same color <br></br>
            - Save each number <br></br><br></br>
            </Typography>
            <Typography align='left' variant='h5' className={classes.titleParagraphFormat}>Scene Text Recognition:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
            - Build a convolutional neural network architecture using TensorFlow from Keras <br></br>
            - Pass in training dataset <br></br><br></br>
            </Typography>

            <Typography align='center' variant='h4' className={classes.lateTitleFormat}>
                Experiments and Results:
            </Typography>
            <Typography align='left' variant='h5' className={classes.titleParagraphFormat}>Experimental Setup:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
            - Download and load the testing data set <br></br>
            - Have the followings downloaded and installed: <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Python3, Numpy, OpenCV, Keras, TensorFlow <br></br>

            </Typography>


            <Typography align='left' variant='h5' className={classes.titleParagraphFormat}>Dataset Used:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
            - <a href="http://ufldl.stanford.edu/housenumbers/">The Street View House Numbers (SVHN) Dataset</a> <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Real-world image dataset <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Over 600,000 digit images (73,257 digits for training, 26,032 digits for testing, 531,131 additional less difficult<br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; samples for extra training) <br></br><br></br>
            </Typography>

            <Typography align='left' variant='h5' className={classes.titleParagraphFormat}>Implementation:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
            - Retrieve an image from the testing image pool <br></br>
            - Pre-process the image using the same approach as our training approach: <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Converting to Grayscale <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Denoise <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Apply canny edge detectors <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Find contours of the numbers <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - May need to normalise the intensity of data <br></br>
            - Use our training approach to make predictions for each letter respectively <br></br>
            - Combine the predicted letters as the answer <br></br>
            - Compare the predicted answer with the actual answer given by the testing image pool <br></br><br></br>
            </Typography>

            <Typography align='left' variant='h5' className={classes.titleParagraphFormat}>Expected Results:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
            Given the images from the testing image pool as input for the above implementation, we believe that there is an intensive amount of data inside the pool, thus the dataset should be enough to test the system. 
            We hope to measure the precision of our predicted answer compare it with the actual answer and reach a success rate of at least 80%. In order to determien the rate of success,  we will be using the number of correct detection divided by the total number of letter input. 
            Some possible error we foresee with our mode is the effect of natural lighting conditions and other image precision factors, it is uncertain if the output for blurry/low precision images is desirable enough.
            </Typography>

            </Box>
        </div>
    )
}

export default Proposal;