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
        paddingBottom:'10px',
    },
    boxFormat: {
        width: '80%',
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
            <Typography align='center' variant='h4' className={classes.lateTitleFormat}>
                Problem Statement
            </Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat}>
            When someone uses our system, they are expected to input images of house numbers displayed on streets. These images should be taken from a camera, or extracted from Google street view, with random background and diverse colors, but have the house numbers locating in the middle. The desired output is the same image with detected house numbers labeled besides the actual house numbers. <br></br>
            </Typography>


            <Typography align='center' variant='h4' className={classes.lateTitleFormat}>
                Approach
            </Typography>
            <Typography align='left' variant='h6' className={classes.titleParagraphFormat}>Image Processing Techniques:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat}>
            &nbsp; &nbsp; - Convert the input image into a grayscale image <br></br>
            &nbsp; &nbsp; - Adjust lighting into desired condition in the image <br></br>
            &nbsp; &nbsp; - Denoise from the image <br></br>
            &nbsp; &nbsp; - Use the canny edge detector to detect the edges <br></br>
            &nbsp; &nbsp; - Normalising intensity of data through mean subtraction <br></br>
            &nbsp; &nbsp; - Experiment with different types of contrast normalisation (global, local) <br></br> <br></br>
            </Typography>
            <Typography align='left' variant='h6' className={classes.titleParagraphFormat}> Scene Text Detection:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat}>
            &nbsp; &nbsp; - The dataset comes in two different formats from SVHN: <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Images with character level bounding boxes <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - 32-by-32 images centered around single character <br></br>
            &nbsp; &nbsp; - For images that do not have a bounding box, use YOLO to find the text box with a single neural network to predict &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;bounding boxes and label the bounding boxes  <br></br>
            &nbsp; &nbsp; - After the bounding boxes are determined, crop the image into individual digits. <br></br>
            &nbsp; &nbsp; - Use findCountours() function in OpenCV library to detect separate portion of the image with continuous pixels of the &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  same color <br></br>
            &nbsp; &nbsp; - Save each number <br></br><br></br>
            </Typography>
            <Typography align='left' variant='h6' className={classes.titleParagraphFormat}>Scene Text Recognition:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat}>
            &nbsp; &nbsp; - Build a convolutional neural network architecture using TensorFlow from Keras <br></br>
            &nbsp; &nbsp; - Pass in training dataset <br></br><br></br>
            </Typography>

            <Typography align='center' variant='h4' className={classes.lateTitleFormat}>
                Experiments and Results:
            </Typography>
            <Typography align='left' variant='h6' className={classes.titleParagraphFormat}>Experimental Setup:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat}>
            &nbsp; &nbsp; - Download and load the testing data set <br></br>
            &nbsp; &nbsp; - Have the followings downloaded and installed: <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Python3 <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Numpy <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - OpenCV <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Keras <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - TensorFlow <br></br><br></br>
            </Typography>


            <Typography align='left' variant='h6' className={classes.titleParagraphFormat}>Dataset Used:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat}>
            &nbsp; &nbsp; - <a href="http://ufldl.stanford.edu/housenumbers/">The Street View House Numbers (SVHN) Dataset</a> <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Real-world image dataset <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Over 600,000 digit images (73,257 digits for training, 26,032 digits for testing, 531,131 additional less difficult<br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; samples for extra training) <br></br><br></br>
            </Typography>

            <Typography align='left' variant='h6' className={classes.titleParagraphFormat}>Implementation:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat}>
            &nbsp; &nbsp; - Retrieve an image from the testing image pool <br></br>
            &nbsp; &nbsp; - Pre-process the image using the same approach as our training approach: <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Converting to Grayscale <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Denoise <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Apply canny edge detectors <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Find contours of the numbers <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - May need to normalise the intensity of data <br></br>
            &nbsp; &nbsp; - Use our training approach to make predictions for each letter respectively <br></br>
            &nbsp; &nbsp; - Combine the predicted letters as the answer <br></br>
            &nbsp; &nbsp; - Compare the predicted answer with the actual answer given by the testing image pool <br></br><br></br>
            </Typography>

            <Typography align='left' variant='h6' className={classes.titleParagraphFormat}>Defining Success:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat}>
            &nbsp; &nbsp; - Measure the precision of our predicted answer and the actual answer. Use the number of correct detection divided by <br></br> 
            &nbsp; &nbsp; &nbsp; the total number of letter input. A successful detection expects the result to be at least 80%<br></br><br></br>
            </Typography>

            <Typography align='left' variant='h6' className={classes.titleParagraphFormat}>List of Experiments to Perform:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat}>
            &nbsp; &nbsp; - Use the images from the testing image pool as input for the above implementations. Considering the intensive amount <br></br> 
            &nbsp; &nbsp; &nbsp; of data inside the pool, this should be enough for testing the system<br></br><br></br>
            </Typography>

            <Typography align='left' variant='h6' className={classes.titleParagraphFormat}>Expectation of Results:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat}>
            &nbsp; &nbsp; - The experiments are expected to reveal successful detection and recognition of house numbers with an accuracy rate<br></br> 
            &nbsp; &nbsp; &nbsp; of at least 80% <br></br><br></br>
            </Typography>

            <Typography align='left' variant='h6' className={classes.titleParagraphFormat}>Uncertainties about Potential Outcomes:</Typography>
            <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat}>
            &nbsp; &nbsp; - With regard to the natural lighting conditions and other image precision factors, it is uncertain if the output for<br></br> 
            &nbsp; &nbsp; &nbsp; blurry/low precision images is desirable enough<br></br>
            </Typography>

            </Box>
        </div>
    )
}

export default Proposal;